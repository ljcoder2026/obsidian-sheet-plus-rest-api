import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Swagger 配置
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
  },
  apis: [path.join(__dirname, '../src/api.ts')],
};

console.log('Generating OpenAPI spec...');

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// 生成 openapi.yaml 文件

const openapiYaml = yaml.dump(swaggerDocs);
const outputDir = path.join(__dirname, '../dist');
const outputFile = path.join(outputDir, 'openapi.yaml');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(outputFile, openapiYaml);
console.log(`OpenAPI spec generated at ${outputFile}`);

// 复制到根目录，便于部署
const rootOutputFile = path.join(__dirname, '../openapi.yaml');
fs.writeFileSync(rootOutputFile, openapiYaml);
console.log(`OpenAPI spec copied to ${rootOutputFile}`);
