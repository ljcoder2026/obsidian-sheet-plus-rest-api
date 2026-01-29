import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

const app = express();
const PORT = 3001;

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

console.log('Swagger options:', swaggerOptions);

const swaggerDocs = swaggerJsdoc(swaggerOptions);
console.log('Generated swagger docs:', JSON.stringify(swaggerDocs, null, 2));

// 自定义 Swagger UI 配置
const swaggerUiOptions = {
  customCss: `
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
  `,
  customSiteTitle: 'Obsidian Sheet Plus API Documentation',
  customIntro: `
    <div class="api-config-section">
      <h2>接口配置信息</h2>
      <p><strong>MCP Server 地址:</strong> <code>http://localhost:${MCP_PORT}</code></p>
      <p><strong>API 文档地址:</strong> <code>http://localhost:${PORT}/api-docs</code></p>
      
      <h3>API Key 设置</h3>
      <p>1. 在 Obsidian Sheet Plus 插件的 MCP Server 管理页面中开启 API Key 验证</p>
      <p>2. 系统会自动生成 API Key 或使用已缓存的 Key</p>
      <p>3. 使用 Copy 按钮复制 API Key</p>
      
      <h3>如何使用 API Key</h3>
      <p>在请求头中添加以下认证信息:</p>
      <pre><code>X-API-KEY: YOUR_API_KEY</code></pre>
      
      <h3>注意事项</h3>
      <p>- 开启 API Key 验证后，所有请求都需要携带有效的 API Key</p>
      <p>- 重置 API Key 后，旧的 Key 将失效</p>
      <p>- 关闭 API Key 验证后，请求不需要携带 API Key</p>
    </div>
  `,
};

// 配置 Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerUiOptions));

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`API Docs server running on http://localhost:${PORT}/api-docs`);
});
