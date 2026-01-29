"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const PORT = 3001;
// Swagger 配置
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Smart Sheet REST API',
            version: '1.0.0',
            description: 'API documentation for Smart Sheet plugin',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'MCP Server',
            },
        ],
    },
    apis: ['./src/api.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
// 配置 Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// 健康检查端点
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// 启动服务器
app.listen(PORT, () => {
    console.log(`API Docs server running on http://localhost:${PORT}/api-docs`);
});
