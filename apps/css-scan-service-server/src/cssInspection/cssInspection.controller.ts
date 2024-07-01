import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CssInspectionService } from "./cssInspection.service";
import { CssInspectionControllerBase } from "./base/cssInspection.controller.base";

@swagger.ApiTags("cssInspections")
@common.Controller("cssInspections")
export class CssInspectionController extends CssInspectionControllerBase {
  constructor(protected readonly service: CssInspectionService) {
    super(service);
  }
}
