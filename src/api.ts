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
 * /get_max_rows:
 *   get:
 *     summary: Get Max Rows
 *     description: Get the maximum number of rows in a sheet
 *     tags:
 *       - Row and Column Operations
 *     parameters:
 *       - in: query
 *         name: sheetName
 *         required: false
 *         schema:
 *           type: string
 *         description: Sheet name
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
 * /get_max_columns:
 *   get:
 *     summary: Get Max Columns
 *     description: Get the maximum number of columns in a sheet
 *     tags:
 *       - Row and Column Operations
 *     parameters:
 *       - in: query
 *         name: sheetName
 *         required: false
 *         schema:
 *           type: string
 *         description: Sheet name
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
 * /clear_all:
 *   post:
 *     summary: Clear All
 *     description: Clear all contents and formats of specified sheet cell range
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
 * /insert_rows:
 *   post:
 *     summary: Insert Rows
 *     description: Insert new rows at a specified position
 *     tags:
 *       - Row and Column Operations
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
 *               rowIndex:
 *                 type: number
 *                 description: Row index where to insert new rows (0-based)
 *               numberOfRows:
 *                 type: number
 *                 description: Number of rows to insert
 *             required:
 *               - rowIndex
 *               - numberOfRows
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
 * /delete_rows:
 *   post:
 *     summary: Delete Rows
 *     description: Delete rows at a specified position
 *     tags:
 *       - Row and Column Operations
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
 *               rowIndex:
 *                 type: number
 *                 description: Row index where to start deleting (0-based)
 *               numberOfRows:
 *                 type: number
 *                 description: Number of rows to delete
 *             required:
 *               - rowIndex
 *               - numberOfRows
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
 * /insert_columns:
 *   post:
 *     summary: Insert Columns
 *     description: Insert new columns at a specified position
 *     tags:
 *       - Row and Column Operations
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
 *               columnIndex:
 *                 type: number
 *                 description: Column index where to insert new columns (0-based)
 *               numberOfColumns:
 *                 type: number
 *                 description: Number of columns to insert
 *             required:
 *               - columnIndex
 *               - numberOfColumns
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
 * /delete_columns:
 *   post:
 *     summary: Delete Columns
 *     description: Delete columns at a specified position
 *     tags:
 *       - Row and Column Operations
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
 *               columnIndex:
 *                 type: number
 *                 description: Column index where to start deleting (0-based)
 *               numberOfColumns:
 *                 type: number
 *                 description: Number of columns to delete
 *             required:
 *               - columnIndex
 *               - numberOfColumns
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
 * /auto_resize_rows:
 *   post:
 *     summary: Auto Resize Rows
 *     description: Auto resize multiple rows to fit their content
 *     tags:
 *       - Row and Column Operations
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
 *               startRow:
 *                 type: number
 *                 description: Starting row index (0-based)
 *               numberOfRows:
 *                 type: number
 *                 description: Number of rows to resize
 *             required:
 *               - startRow
 *               - numberOfRows
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
 * /auto_resize_columns:
 *   post:
 *     summary: Auto Resize Columns
 *     description: Auto resize multiple columns to fit their content
 *     tags:
 *       - Row and Column Operations
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
 *               startColumn:
 *                 type: number
 *                 description: Starting column index (0-based)
 *               numberOfColumns:
 *                 type: number
 *                 description: Number of columns to resize
 *             required:
 *               - startColumn
 *               - numberOfColumns
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
 * /merge_cells:
 *   post:
 *     summary: Merge Cells
 *     description: Merge cells in a specified range
 *     tags:
 *       - Row and Column Operations
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
 *                 description: Cell range to merge, e.g., A1:B2
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
 * /unmerge_cells:
 *   post:
 *     summary: Unmerge Cells
 *     description: Unmerge (break apart) merged cells in a specified range
 *     tags:
 *       - Row and Column Operations
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
 *                 description: Cell range to unmerge, e.g., A1:B2
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

/**
 * @swagger
 * /add_conditional_formatting:
 *   post:
 *     summary: Add Conditional Formatting
 *     description: Add conditional formatting rule to a range
 *     tags:
 *       - Conditional Formatting
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
 *               ruleType:
 *                 type: string
 *                 enum: ["number","text","date","cell","average","colorScale","dataBar","iconSet"]
 *                 description: Type of conditional formatting rule
 *               condition:
 *                 type: object
 *                 description: Condition settings based on rule type
 *               format:
 *                 type: object
 *                 description: Format settings for conditional formatting
 *             required:
 *               - range
 *               - ruleType
 *               - condition
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
 * /remove_conditional_formatting:
 *   post:
 *     summary: Remove Conditional Formatting
 *     description: Remove conditional formatting rules from a range
 *     tags:
 *       - Conditional Formatting
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
 * /clear_all_conditional_formatting:
 *   post:
 *     summary: Clear All Conditional Formatting
 *     description: Clear all conditional formatting rules from the entire sheet
 *     tags:
 *       - Conditional Formatting
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

