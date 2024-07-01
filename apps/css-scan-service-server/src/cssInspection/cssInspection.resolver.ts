import * as graphql from "@nestjs/graphql";
import { CssInspectionResolverBase } from "./base/cssInspection.resolver.base";
import { CssInspection } from "./base/CssInspection";
import { CssInspectionService } from "./cssInspection.service";

@graphql.Resolver(() => CssInspection)
export class CssInspectionResolver extends CssInspectionResolverBase {
  constructor(protected readonly service: CssInspectionService) {
    super(service);
  }
}
