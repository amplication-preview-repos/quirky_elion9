import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceInsightServiceBase } from "./base/performanceInsight.service.base";

@Injectable()
export class PerformanceInsightService extends PerformanceInsightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
