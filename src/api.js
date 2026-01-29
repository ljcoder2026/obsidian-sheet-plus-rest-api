"use strict";
/**
 * @swagger
 * /get_sheet_data:
 *   post:
 *     summary: Get sheet data
 *     description: 获取指定工作表的数据
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetId:
 *                 type: string
 *                 description: 工作表 ID
 *               range:
 *                 type: string
 *                 description: 数据范围，例如 A1:B10
 *             required:
 *               - sheetId
 *     responses:
 *       200:
 *         description: 成功获取工作表数据
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: array
 *                     items:
 *                       type: any
 *                 sheetName:
 *                   type: string
 *                 message:
 *                   type: string
 */
/**
 * @swagger
 * /insert_sheet_data:
 *   post:
 *     summary: Insert sheet data
 *     description: 插入数据到指定工作表
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetId:
 *                 type: string
 *                 description: 工作表 ID
 *               range:
 *                 type: string
 *                 description: 数据范围，例如 A1:B10
 *               values:
 *                 type: array
 *                 description: 要更新的数据，二维数组
 *                 items:
 *                   type: array
 *                   items:
 *                     type: any
 *             required:
 *               - sheetId
 *               - range
 *               - values
 *     responses:
 *       200:
 *         description: 成功插入数据
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 sheetName:
 *                   type: string
 */
/**
 * @swagger
 * /get_sheet_list:
 *   post:
 *     summary: Get sheet list
 *     description: 获取当前工作簿中的所有工作表
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: 成功获取工作表列表
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       index:
 *                         type: number
 *                 message:
 *                   type: string
 */
/**
 * @swagger
 * /create_sheet:
 *   post:
 *     summary: Create sheet
 *     description: 在工作簿中创建一个新的工作表
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: 工作表名称
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: 成功创建工作表
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     workbookId:
 *                       type: string
 *                 message:
 *                   type: string
 */
/**
 * @swagger
 * /set_formula:
 *   post:
 *     summary: Set formula
 *     description: 在指定单元格设置公式
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetId:
 *                 type: string
 *                 description: 工作表 ID，默认为当前活动工作表
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1 或 A1:B10
 *               formula:
 *                 type: string
 *                 description: 公式，例如 =SUM(B1:B10)
 *             required:
 *               - range
 *               - formula
 *     responses:
 *       200:
 *         description: 成功设置公式
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     range:
 *                       type: string
 *                     formula:
 *                       type: string
 *                     sheetId:
 *                       type: string
 *                 message:
 *                   type: string
 */
/**
 * @swagger
 * /set_range_style:
 *   post:
 *     summary: Set range style
 *     description: 设置指定范围的样式
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetId:
 *                 type: string
 *                 description: 工作表 ID，默认为当前活动工作表
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *               style:
 *                 type: object
 *                 description: 要设置的样式对象
 *                 properties:
 *                   backgroundColor:
 *                     type: string
 *                     description: 背景颜色，例如 #FFFF00
 *                   fontColor:
 *                     type: string
 *                     description: 字体颜色，例如 #0000FF
 *                   fontSize:
 *                     type: number
 *                     description: 字体大小
 *                   fontFamily:
 *                     type: string
 *                     description: 字体家族
 *                   fontWeight:
 *                     type: string
 *                     description: 字体粗细，例如 normal 或 bold
 *                   fontStyle:
 *                     type: string
 *                     description: 字体样式，例如 normal 或 italic
 *                   textDecoration:
 *                     type: string
 *                     description: 文本装饰
 *                   horizontalAlignment:
 *                     type: string
 *                     description: 水平对齐方式
 *                   verticalAlignment:
 *                     type: string
 *                     description: 垂直对齐方式
 *                   textRotation:
 *                     type: number
 *                     description: 文本旋转角度
 *                   border:
 *                     type: object
 *                     description: 边框样式
 *             required:
 *               - range
 *               - style
 *     responses:
 *       200:
 *         description: 成功设置样式
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     range:
 *                       type: string
 *                     sheetId:
 *                       type: string
 *                     style:
 *                       type: object
 *                 message:
 *                   type: string
 */
