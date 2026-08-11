import "dotenv/config";

import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined");
    }

    // Create the PostgreSQL adapter using the database connection URL.
    const adapter = new PrismaPg({
      connectionString: databaseUrl,
    });

    // Initialize Prisma Client with the PostgreSQL adapter.
    super({
      adapter,
    });
  }

  // Connect to the database when the NestJS application starts.
  async onModuleInit() {
    await this.$connect();
  }

  // Disconnect from the database when the NestJS application shuts down.
  async onModuleDestroy() {
    await this.$disconnect();
  }
}