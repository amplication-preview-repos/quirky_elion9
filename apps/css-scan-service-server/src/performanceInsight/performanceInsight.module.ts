import { Module } from "@nestjs/common";
import { PerformanceInsightModuleBase } from "./base/performanceInsight.module.base";
import { PerformanceInsightService } from "./performanceInsight.service";
import { PerformanceInsightController } from "./performanceInsight.controller";
import { PerformanceInsightResolver } from "./performanceInsight.resolver";

@Module({
  imports: [PerformanceInsightModuleBase],
  controllers: [PerformanceInsightController],
  providers: [PerformanceInsightService, PerformanceInsightResolver],
  exports: [PerformanceInsightService],
})
export class PerformanceInsightModule {}
