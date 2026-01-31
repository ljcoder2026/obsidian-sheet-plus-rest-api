/**
 * @swagger
 * /get_workbook_data:
 *   get:
 *     summary: Get workbook data
 *     description: 获取全量数据，包括条件格式、数据验证和其他插件数据
 *     tags:
 *       - Workbook
 *     responses:
 *       200:
 *         description: Successfully retrieved workbook data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   description: Workbook data
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /get_sheet_list:
 *   get:
 *     summary: Get sheet list
 *     description: 获取当前工作簿中的所有工作表
 *     tags:
 *       - Sheets
 *     responses:
 *       200:
 *         description: Successfully retrieved sheet list
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
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /get_sheet_data:
 *   get:
 *     summary: Get sheet data
 *     description: 获取工作表的数据
 *     tags:
 *       - Sheets
 *     parameters:
 *       - in: query
 *         name: sheetName
 *         required: false
 *         schema:
 *           type: string
 *         description: 工作表名称
 *       - in: query
 *         name: range
 *         required: false
 *         schema:
 *           type: string
 *         description: 数据范围，例如 A1:B10
 *     responses:
 *       200:
 *         description: Successfully retrieved sheet data
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
 *                 error:
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
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *             required:
 *               - sheetName
 *     responses:
 *       200:
 *         description: Successfully created sheet
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
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_sheet_data:
 *   post:
 *     summary: Set sheet data
 *     description: 更新工作表的数据
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
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
 *               - sheetName
 *               - range
 *               - values
 *     responses:
 *       200:
 *         description: Successfully updated sheet data
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
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_formula:
 *   post:
 *     summary: Set formula
 *     description: 在指定单元格设置/添加/插入公式
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1 或 A1:B10
 *               formula:
 *                 type: string
 *                 description: 公式，例如 =SUM(B1:B10)
 *             required:
 *               - sheetName
 *               - range
 *               - formula
 *     responses:
 *       200:
 *         description: Successfully set formula
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_range_style:
 *   post:
 *     summary: Set range style
 *     description: 设置指定范围的样式，包括字体、颜色、背景色、边框等
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *               style:
 *                 type: object
 *                 description: 要设置的样式对象，包括字体、颜色、背景色、边框等
 *                 properties:
 *                   backgroundColor:
 *                     type: string
 *                     description: 背景颜色，例如 #FFFF00
 *                   fontColor:
 *                     type: string
 *                     description: 字体颜色，例如 #0000FF
 *                   fontSize:
 *                     type: number
 *                     description: A font size in point size. A null value resets the font size.
 *                   fontFamily:
 *                     type: string
 *                     description: he font family to set; a null value resets the font family.
 *                   fontLine:
 *                     type: string
 *                     enum: [none, single, double]
 *                     description: The font line style, either ‘underline’, ‘line-through’, or ‘none’; a null value resets the font line style.
 *                   fontWeight:
 *                     type: string
 *                     enum: [normal, bold]
 *                     description: The font weight, either ‘normal’ or ‘bold’; a null value resets the font weight.
 *                   fontStyle:
 *                     type: string
 *                     enum: [normal, italic]
 *                     description: The font style, either ‘italic’ or ‘normal’; a null value resets the font style.
 *                   textDecoration:
 *                     type: string
 *                     enum: [none, underline, line-through]
 *                     description: 文本装饰
 *                   horizontalAlignment:
 *                     type: string
 *                     enum: [left, center, right]
 *                     description: Set the horizontal (left to right) alignment for the given range (left/center/right).
 *                   verticalAlignment:
 *                     type: string
 *                     enum: [top, middle, bottom]
 *                     description: Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
 *                   textRotation:
 *                     type: number
 *                     description: Set the text rotation angle for the given range (0-360 degrees).
 *                   wrap:
 *                     type: boolean
 *                     description: Set the cell wrap of the given range. Cells with wrap enabled (the default) resize to display their full content. Cells with wrap disabled display as much as possible in the cell without resizing or running to multiple lines.
 *                   border:
 *                     type: object
 *                     description: 边框样式
 *                     properties:
 *                       type:
 *                         type: string
 *                         enum: [top, bottom, left, right, none, all, outside, inside, horizontal, vertical, tlbr, tlbc_tlmr, tlbr_tlbc_tlmr, bl_tr, mltr_bctr]
 *                         description: 边框类型，比如所有边框为 all
 *                       style:
 *                         type: string
 *                         enum: [NONE, THIN, HAIR, DOTTED, DASHED, DASH_DOT, DASH_DOT_DOT, DOUBLE, MEDIUM, MEDIUM_DASHED, MEDIUM_DASH_DOT, MEDIUM_DASH_DOT_DOT, SLANT_DASH_DOT, THICK]
 *                         description: 边框样式，例如 NONE 为 0, THIN 为 1, HAIR 为 2, DOTTED 为 3, DASHED 为 4, DASH_DOT 为 5, DASH_DOT_DOT 为 6, DOUBLE 为 7, MEDIUM 为 8, MEDIUM_DASHED 为 9, MEDIUM_DASH_DOT 为 10, MEDIUM_DASH_DOT_DOT 为 11, SLANT_DASH_DOT 为 12, THICK 为 13
 *                       color:
 *                         type: object
 *                         description: 边框颜色
 *                         properties:
 *                           color:
 *                             type: string
 *                             description: 边框颜色
 *             required:
 *               - range
 *               - style
 *     responses:
 *       200:
 *         description: Successfully set style
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
 *                     sheetName:
 *                       type: string
 *                     style:
 *                       type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_data_validation:
 *   post:
 *     summary: Set data validation
 *     description: 为指定单元格范围设置数据验证
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *               type:
 *                 type: string
 *                 description: 数据验证类型，例如 whole、decimal、list、date、time、textLength、custom、checkbox 或 any
 *                 enum: [whole, decimal, list, listMultiple, date, time, textLength, custom, checkbox, any]
 *               formula1:
 *                 type: string
 *                 description: 第一个公式或值，例如 1 或 A1:A10
 *               formula2:
 *                 type: string
 *                 description: 第二个公式或值，用于 between 类型，例如 100
 *               operator:
 *                 type: string
 *                 description: 运算符，例如 between、equal、greaterThan 等
 *                 enum: [between, notBetween, equal, notEqual, greaterThan, lessThan, greaterThanOrEqual, lessThanOrEqual]
 *               allowBlank:
 *                 type: boolean
 *                 description: 是否允许空白单元格
 *               showErrorMessage:
 *                 type: boolean
 *                 description: 是否显示错误消息
 *               errorMessage:
 *                 type: string
 *                 description: 错误消息内容
 *             required:
 *               - range
 *               - type
 *               - formula1
 *     responses:
 *       200:
 *         description: Successfully set data validation
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
 *                     type:
 *                       type: string
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */


/**
 * @swagger
 * /set_filter:
 *   post:
 *     summary: Set filter
 *     description: 为指定范围设置筛选并设置筛选条件
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *               columnFilters:
 *                 type: object
 *                 description: Column filter conditions, key is column index or letter, value is filter value array
 *                 additionalProperties:
 *                   type: array
 *                   items:
 *                     type: string
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully set filter
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
 *                     sheetName:
 *                       type: string
 *                     columnFilters:
 *                       type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_filter:
 *   post:
 *     summary: Clear filter
 *     description: 清除指定工作表的筛选条件
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               columnIndex:
 *                 type: number
 *                 description: 列索引，可选，默认为清除所有列的筛选条件
 *               removeFilter:
 *                 type: boolean
 *                 description: 是否完全移除筛选器，默认为 false（仅清除筛选条件）
 *     responses:
 *       200:
 *         description: Successfully cleared filter
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
 *                     sheetName:
 *                       type: string
 *                     columnIndex:
 *                       type: number
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_contents:
 *   post:
 *     summary: Clear contents
 *     description: 清空指定工作表单元格范围的内容
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully cleared contents
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_format:
 *   post:
 *     summary: Clear format
 *     description: 清空指定工作表单元格范围的格式
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully cleared format
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_comments:
 *   post:
 *     summary: Clear comments
 *     description: 清空指定工作表单元格范围的批注
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully cleared comments
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_hyperlinks:
 *   post:
 *     summary: Clear hyperlinks
 *     description: 清空指定工作表单元格范围的超链接
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully cleared hyperlinks
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_all:
 *   post:
 *     summary: Clear all
 *     description: 清空指定工作表单元格范围的所有内容和格式
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully cleared all
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_data_validation:
 *   post:
 *     summary: Clear data validation
 *     description: 删除/清空指定工作表单元格范围的数据验证规则
 *     tags:
 *       - Sheets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: 工作表名称
 *               range:
 *                 type: string
 *                 description: 单元格范围，例如 A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successfully cleared data validation
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
 *                     sheetName:
 *                       type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */
