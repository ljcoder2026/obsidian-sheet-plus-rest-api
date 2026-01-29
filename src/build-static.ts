import fs from 'fs';
import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';

// Swagger 配置
const MCP_PORT = process.env.MCP_PORT || 3000;
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Obsidian Sheet Plus REST API',
      version: '1.0.0',
      description: 'API documentation for Obsidian Sheet Plus plugin',
    },
    servers: [
      {
        url: `http://localhost:${MCP_PORT}`,
        description: 'MCP Server',
      },
      {
        url: 'http://localhost:{port}',
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
  },
  apis: [path.join(__dirname, '../src/api.ts')],
};

console.log('Generating static API docs...');

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// 生成静态 HTML 文件
function generateStaticHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Obsidian Sheet Plus API Documentation</title>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css" />
  <style>
    .swagger-ui .topbar { background-color: #f0f0f0; }
    .swagger-ui .info { margin-bottom: 30px; }
    .swagger-ui .api-config-section {
      background: #f9f9f9;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .swagger-ui .api-config-section h2 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 18px;
    }
    .swagger-ui .api-config-section p {
      margin-bottom: 10px;
    }
    .swagger-ui .api-config-section code {
      background: #e8e8e8;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js"></script>
  <script>
    const swaggerSpec = ${JSON.stringify(swaggerDocs)};
    
    window.onload = function() {
      const ui = SwaggerUIBundle({
        spec: swaggerSpec,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        customSiteTitle: 'Obsidian Sheet Plus API Documentation'
      });
      
      window.ui = ui;
    };
  </script>
</body>
</html>
`;
}

// 输出目录
const outputDir = path.join(__dirname, '../dist');
const outputHtmlFile = path.join(outputDir, 'index.html');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入 HTML 文件
const staticHtml = generateStaticHtml();
fs.writeFileSync(outputHtmlFile, staticHtml);
console.log(`Static HTML generated at ${outputHtmlFile}`);

// 复制到根目录，便于部署
const rootOutputHtmlFile = path.join(__dirname, '../index.html');
fs.writeFileSync(rootOutputHtmlFile, staticHtml);
console.log(`Static HTML copied to ${rootOutputHtmlFile}`);

console.log('Static API docs generation completed!');
