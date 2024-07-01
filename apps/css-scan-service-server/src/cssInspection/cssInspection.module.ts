import { Module } from "@nestjs/common";
import { CssInspectionModuleBase } from "./base/cssInspection.module.base";
import { CssInspectionService } from "./cssInspection.service";
import { CssInspectionController } from "./cssInspection.controller";
import { CssInspectionResolver } from "./cssInspection.resolver";

@Module({
  imports: [CssInspectionModuleBase],
  controllers: [CssInspectionController],
  providers: [CssInspectionService, CssInspectionResolver],
  exports: [CssInspectionService],
})
export class CssInspectionModule {}
