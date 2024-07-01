import * as graphql from "@nestjs/graphql";
import { PerformanceInsightResolverBase } from "./base/performanceInsight.resolver.base";
import { PerformanceInsight } from "./base/PerformanceInsight";
import { PerformanceInsightService } from "./performanceInsight.service";

@graphql.Resolver(() => PerformanceInsight)
export class PerformanceInsightResolver extends PerformanceInsightResolverBase {
  constructor(protected readonly service: PerformanceInsightService) {
    super(service);
  }
}
