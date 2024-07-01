import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StyleCopyService } from "./styleCopy.service";
import { StyleCopyControllerBase } from "./base/styleCopy.controller.base";

@swagger.ApiTags("styleCopies")
@common.Controller("styleCopies")
export class StyleCopyController extends StyleCopyControllerBase {
  constructor(protected readonly service: StyleCopyService) {
    super(service);
  }
}
