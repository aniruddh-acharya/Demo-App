import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";

export const POSTGRES_DATA_SOURCE = Symbol.for("PostgresDataSource");

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  synchronize:false,
  database: "demo-app",
  migrationsRun: true,
  migrationsTableName: 'migrations',
  entities: entitiesPathsFor(),
  migrations: migrationsPathsFor()
});

registerProvider<DataSource>({
  provide: POSTGRES_DATA_SOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await PostgresDataSource.initialize();

    logger.info("Connected with typeorm to database: Postgres");

    return PostgresDataSource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});

function entitiesPathsFor() {

  return ['src/models/*.ts'];
  
}
  

function migrationsPathsFor() {

  return ['src/migrations/**/*.ts'];

}
