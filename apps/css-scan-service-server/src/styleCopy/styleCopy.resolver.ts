import * as graphql from "@nestjs/graphql";
import { StyleCopyResolverBase } from "./base/styleCopy.resolver.base";
import { StyleCopy } from "./base/StyleCopy";
import { StyleCopyService } from "./styleCopy.service";

@graphql.Resolver(() => StyleCopy)
export class StyleCopyResolver extends StyleCopyResolverBase {
  constructor(protected readonly service: StyleCopyService) {
    super(service);
  }
}
