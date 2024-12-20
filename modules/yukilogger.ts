const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

export function yukilogger(message: string, isError: boolean) {}
// ロガー設定
'use strict'
log4js.configure({
    appenders: {
        console: { type: 'console' }, // コンソール出力
        file: { type: 'file', filename: 'logs/app.log' }, // ファイル出力
    },
    categories: {
        default: { appenders: ['console', 'file'], level: 'info' }, // デフォルトカテゴリ
    },
});

// ロガーの取得
const logger_log4js = log4js.getLogger();

// ログ出力
// logger.trace('This is a TRACE log.');
// logger.debug('This is a DEBUG log.');
// logger.info('This is an INFO log.');
// logger.warn('This is a WARN log.');
// logger.error('This is an ERROR log.');
// logger.fatal('This is a FATAL log.');

// logger_log4js}