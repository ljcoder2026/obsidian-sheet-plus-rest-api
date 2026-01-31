const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Read the sheetTools.ts file directly
const sheetToolsPath = path.join(__dirname, '../../../packages/smart-sheet/src/ai/tools/univerTools/sheetTools.ts');
const dataValidationToolsPath = path.join(__dirname, '../../../packages/smart-sheet/src/ai/tools/univerTools/dataValidationTools.ts');
const workbookToolsPath = path.join(__dirname, '../../../packages/smart-sheet/src/ai/tools/univerTools/workbookTools.ts');

// Read the files
const sheetToolsContent = fs.readFileSync(sheetToolsPath, 'utf8');
const dataValidationToolsContent = fs.readFileSync(dataValidationToolsPath, 'utf8');
const workbookToolsContent = fs.readFileSync(workbookToolsPath, 'utf8');

// Parse the tools from the files
function parseTools(content) {
  const tools = [];
  
  // Match tool definitions - only match uncommented lines
  const toolRegex = /^export const (\w+Tool): IUniverTool = \{[\s\S]*?^\};\n/gm;
  let match;
  
  while ((match = toolRegex.exec(content)) !== null) {
    const toolContent = match[0];
    
    // Extract name
    const nameRegex = /name: '([^']+)'/;
    const nameMatch = toolContent.match(nameRegex);
    const name = nameMatch ? nameMatch[1] : null;
    
    // Extract description
    const descriptionRegex = /description: '([^']+)'/;
    const descriptionMatch = toolContent.match(descriptionRegex);
    const description = descriptionMatch ? descriptionMatch[1] : null;
    
    // Extract parameters
    const parametersRegex = /parameters: ([\s\S]*?),\n\s*function:/;
    const parametersMatch = toolContent.match(parametersRegex);
    let parameters = null;
    
    if (parametersMatch) {
      try {
        // Clean up the parameters string
        let paramsStr = parametersMatch[1];
        paramsStr = paramsStr.replace(/\/\/.*$/gm, ''); // Remove comments
        paramsStr = paramsStr.replace(/\s+/g, ' ').trim(); // Clean whitespace
        
        // Parse parameters
        parameters = eval(`(${paramsStr})`);
      } catch (e) {
        console.warn(`Error parsing parameters for tool: ${name}`, e);
      }
    }
    
    if (name && description) {
      tools.push({
        name,
        description,
        parameters,
      });
    }
  }
  
  return tools;
}

// Parse all tools
const sheetTools = parseTools(sheetToolsContent);
const dataValidationTools = parseTools(dataValidationToolsContent);
const workbookTools = parseTools(workbookToolsContent);

// Combine all tools
const allTools = [...workbookTools, ...sheetTools, ...dataValidationTools];

// Base OpenAPI spec structure
const openapiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Obsidian Sheet Plus REST API',
    version: '1.0.0',
    description: 'API documentation for Obsidian Sheet Plus plugin',
  },
  servers: [
    {
      url: 'http://127.0.0.1:{port}',
      description: 'Local server (custom port)',
      variables: {
        port: {
          default: '3000',
          description: 'Input any running port',
        },
      },
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-KEY',
        description: 'API Key authentication',
      },
    },
  },
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  paths: {},
  tags: [
    {
      name: 'Workbook',
      description: 'Workbook related operations',
    },
    {
      name: 'Sheets',
      description: 'Sheet related operations',
    },
    {
      name: 'Data Validation',
      description: 'Data validation related operations',
    },
  ],
};

// Map tool names to HTTP methods and paths
const toolMapping = {
  get_workbook_data: { method: 'get', path: '/get_workbook_data', tag: 'Workbook' },
  get_sheet_list: { method: 'get', path: '/get_sheet_list', tag: 'Sheets' },
  get_sheet_data: { method: 'get', path: '/get_sheet_data', tag: 'Sheets' },
  create_sheet: { method: 'post', path: '/create_sheet', tag: 'Sheets' },
  set_sheet_data: { method: 'post', path: '/set_sheet_data', tag: 'Sheets' },
  set_formula: { method: 'post', path: '/set_formula', tag: 'Sheets' },
  set_data_validation: { method: 'post', path: '/set_data_validation', tag: 'Data Validation' },
  set_range_style: { method: 'post', path: '/set_range_style', tag: 'Sheets' },
  clear_contents: { method: 'post', path: '/clear_contents', tag: 'Sheets' },
  clear_format: { method: 'post', path: '/clear_format', tag: 'Sheets' },
  clear_all: { method: 'post', path: '/clear_all', tag: 'Sheets' },
  clear_data_validation: { method: 'post', path: '/clear_data_validation', tag: 'Data Validation' },
};

// Process each tool
allTools.forEach((tool) => {
  const mapping = toolMapping[tool.name];
  if (!mapping) {
    console.warn(`No mapping found for tool: ${tool.name}`);
    return;
  }

  const { method, path: apiPath, tag } = mapping;
  
  // Create path if it doesn't exist
  if (!openapiSpec.paths[apiPath]) {
    openapiSpec.paths[apiPath] = {};
  }

  // Build the operation
  const operation = {
    summary: tool.name.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    description: tool.description,
    tags: [tag],
    responses: {
      '200': {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                },
                data: {
                  type: 'object',
                },
                message: {
                  type: 'string',
                },
                error: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  };

  // Add parameters if they exist
  if (tool.parameters && tool.parameters.properties) {
    const parameters = tool.parameters.properties;
    const required = tool.parameters.required || [];

    if (method === 'get') {
      // For GET requests, parameters go in query
      operation.parameters = Object.entries(parameters).map(([name, schema]) => ({
        in: 'query',
        name,
        required: required.includes(name),
        schema: {
          type: schema.type,
          ...(schema.enum && { enum: schema.enum }),
          ...(schema.description && { description: schema.description }),
        },
        description: schema.description,
      }));
    } else {
      // For POST requests, parameters go in requestBody
      operation.requestBody = {
        required: Object.keys(parameters).length > 0,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: Object.entries(parameters).reduce((acc, [name, schema]) => {
                acc[name] = {
                  type: schema.type,
                  ...(schema.enum && { enum: schema.enum }),
                  ...(schema.description && { description: schema.description }),
                  ...(schema.properties && { properties: schema.properties }),
                  ...(schema.items && { items: schema.items }),
                };
                return acc;
              }, {}),
              ...(required.length > 0 && { required }),
            },
          },
        },
      };
    }
  }

  // Add the operation to the path
  openapiSpec.paths[apiPath][method] = operation;
});

// Generate YAML output
const openapiYaml = yaml.dump(openapiSpec);

// Write to file
const outputFile = path.join(__dirname, '../openapi.yaml');
fs.writeFileSync(outputFile, openapiYaml);

console.log(`OpenAPI spec generated at ${outputFile}`);

// Also update the api.ts file with Swagger comments
const swaggerComments = generateSwaggerComments(openapiSpec);
const apiTsFile = path.join(__dirname, 'api.ts');
fs.writeFileSync(apiTsFile, swaggerComments);

console.log(`Swagger comments generated at ${apiTsFile}`);

function generateSwaggerComments(spec) {
  let comments = '';

  Object.entries(spec.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([method, operation]) => {
      comments += `/**\n`;
      comments += ` * @swagger\n`;
      comments += ` * ${path}:\n`;
      comments += ` *   ${method}:\n`;
      comments += ` *     summary: ${operation.summary}\n`;
      comments += ` *     description: ${operation.description}\n`;
      comments += ` *     tags:\n`;
      operation.tags.forEach((tag) => {
        comments += ` *       - ${tag}\n`;
      });

      // Add parameters
      if (operation.parameters) {
        comments += ` *     parameters:\n`;
        operation.parameters.forEach((param) => {
          comments += ` *       - in: ${param.in}\n`;
          comments += ` *         name: ${param.name}\n`;
          comments += ` *         required: ${param.required}\n`;
          comments += ` *         schema:\n`;
          comments += ` *           type: ${param.schema.type}\n`;
          if (param.schema.enum) {
            comments += ` *           enum: ${JSON.stringify(param.schema.enum)}\n`;
          }
          comments += ` *         description: ${param.description}\n`;
        });
      }

      // Add requestBody
      if (operation.requestBody) {
        comments += ` *     requestBody:\n`;
        comments += ` *       required: ${operation.requestBody.required}\n`;
        comments += ` *       content:\n`;
        comments += ` *         application/json:\n`;
        comments += ` *           schema:\n`;
        comments += ` *             type: object\n`;
        comments += ` *             properties:\n`;
        
        const schema = operation.requestBody.content['application/json'].schema;
        if (schema.properties) {
          Object.entries(schema.properties).forEach(([name, propSchema]) => {
            comments += ` *               ${name}:\n`;
            comments += ` *                 type: ${propSchema.type}\n`;
            if (propSchema.enum) {
              comments += ` *                 enum: ${JSON.stringify(propSchema.enum)}\n`;
            }
            if (propSchema.description) {
              comments += ` *                 description: ${propSchema.description}\n`;
            }
          });
        }
        
        if (schema.required) {
          comments += ` *             required:\n`;
          schema.required.forEach((req) => {
            comments += ` *               - ${req}\n`;
          });
        }
      }

      // Add responses
      comments += ` *     responses:\n`;
      comments += ` *       200:\n`;
      comments += ` *         description: Successful operation\n`;
      comments += ` *         content:\n`;
      comments += ` *           application/json:\n`;
      comments += ` *             schema:\n`;
      comments += ` *               type: object\n`;
      comments += ` *               properties:\n`;
      comments += ` *                 success:\n`;
      comments += ` *                   type: boolean\n`;
      comments += ` *                 data:\n`;
      comments += ` *                   type: object\n`;
      comments += ` *                 message:\n`;
      comments += ` *                   type: string\n`;
      comments += ` *                 error:\n`;
      comments += ` *                   type: string\n`;
      comments += ` */\n\n`;
    });
  });

  return comments;
}
