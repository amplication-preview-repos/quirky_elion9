import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceInsightService } from "./performanceInsight.service";
import { PerformanceInsightControllerBase } from "./base/performanceInsight.controller.base";

@swagger.ApiTags("performanceInsights")
@common.Controller("performanceInsights")
export class PerformanceInsightController extends PerformanceInsightControllerBase {
  constructor(protected readonly service: PerformanceInsightService) {
    super(service);
  }
}
