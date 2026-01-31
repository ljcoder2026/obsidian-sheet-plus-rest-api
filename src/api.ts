/**
 * @swagger
 * /get_workbook_data:
 *   get:
 *     summary: Get Workbook Data
 *     description: Get full workbook data
 *     tags:
 *       - Workbook
 *     parameters:
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /get_sheet_list:
 *   get:
 *     summary: Get Sheet List
 *     description: Get all sheets in the current workbook
 *     tags:
 *       - Sheets
 *     parameters:
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /get_sheet_data:
 *   get:
 *     summary: Get Sheet Data
 *     description: Get data from a sheet
 *     tags:
 *       - Sheets
 *     parameters:
 *       - in: query
 *         name: sheetName
 *         required: false
 *         schema:
 *           type: string
 *         description: Sheet name
 *       - in: query
 *         name: range
 *         required: false
 *         schema:
 *           type: string
 *         description: Data range, e.g., A1:B10
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /create_sheet:
 *   post:
 *     summary: Create Sheet
 *     description: Create a new sheet in the workbook
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
 *                 description: Sheet name
 *             required:
 *               - sheetName
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_sheet_data:
 *   post:
 *     summary: Set Sheet Data
 *     description: Update data in a sheet
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
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Data range, e.g., A1:B10
 *               values:
 *                 type: array
 *                 description: Data to update, 2D array
 *             required:
 *               - range
 *               - values
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_formula:
 *   post:
 *     summary: Set Formula
 *     description: Set formula in specified cells
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
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Cell range, e.g., A1 or A1:B10
 *               formula:
 *                 type: string
 *                 description: Formula, e.g., =SUM(B1:B10)
 *             required:
 *               - range
 *               - formula
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_range_style:
 *   post:
 *     summary: Set Range Style
 *     description: Set style for specified range, including font, color, background, borders, etc.
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
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Cell range, e.g., A1:B10
 *               style:
 *                 type: object
 *                 description: Style object to set, including font, color, background, borders, etc.
 *             required:
 *               - range
 *               - style
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_contents:
 *   post:
 *     summary: Clear Contents
 *     description: Clear contents of specified sheet cell range
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
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Cell range, e.g., A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_format:
 *   post:
 *     summary: Clear Format
 *     description: Clear formats of specified sheet cell range
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
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Cell range, e.g., A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /set_data_validation:
 *   post:
 *     summary: Set Data Validation
 *     description: Set data validation for specified cell range
 *     tags:
 *       - Data Validation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Cell range, e.g., A1:B10
 *               type:
 *                 type: string
 *                 enum: ["whole","decimal","list","listMultiple","date","time","textLength","custom","checkbox","any"]
 *                 description: Data validation type, e.g., whole, decimal, list, date, time, textLength, custom, checkbox, or any
 *               formula1:
 *                 type: string
 *                 description: A formula or value, e.g., for list or listMultiple type, value is "1,2,3" with comma-separated options. For checkbox, use TRUE. For other types, use value or formula.
 *               formula2:
 *                 type: string
 *                 description: A formula or value, e.g., for list or listMultiple type, value is "#222222,#222222,#222222" with comma-separated colors. For checkbox, use FALSE. For other types, required if operator is not equal or notEqual.
 *               operator:
 *                 type: string
 *                 enum: ["between","notBetween","equal","notEqual","greaterThan","lessThan","greaterThanOrEqual","lessThanOrEqual"]
 *                 description: Operator, e.g., between, equal, greaterThan, etc.
 *               allowBlank:
 *                 type: boolean
 *                 description: Whether to allow blank cells
 *               showErrorMessage:
 *                 type: boolean
 *                 description: Whether to show error message
 *               errorMessage:
 *                 type: string
 *                 description: Error message content
 *             required:
 *               - range
 *               - type
 *               - formula1
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /clear_data_validation:
 *   post:
 *     summary: Clear Data Validation
 *     description: Delete data validation rules for specified sheet cell range
 *     tags:
 *       - Data Validation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sheetName:
 *                 type: string
 *                 description: Sheet name
 *               range:
 *                 type: string
 *                 description: Cell range, e.g., A1:B10
 *             required:
 *               - range
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

