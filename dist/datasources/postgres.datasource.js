"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = exports.POSTGRES_DATA_SOURCE = void 0;
const di_1 = require("@tsed/di");
const typeorm_1 = require("typeorm");
const logger_1 = require("@tsed/logger");
exports.POSTGRES_DATA_SOURCE = Symbol.for("PostgresDataSource");
exports.PostgresDataSource = new typeorm_1.DataSource({
    type: "postgres",
    entities: [],
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres"
});
(0, di_1.registerProvider)({
    provide: exports.POSTGRES_DATA_SOURCE,
    type: "typeorm:datasource",
    deps: [logger_1.Logger],
    async useAsyncFactory(logger) {
        await exports.PostgresDataSource.initialize();
        logger.info("Connected with typeorm to database: Postgres");
        return exports.PostgresDataSource;
    },
    hooks: {
        $onDestroy(dataSource) {
            return dataSource.isInitialized && dataSource.close();
        }
    }
});
//# sourceMappingURL=postgres.datasource.js.map