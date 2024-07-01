import { Module } from "@nestjs/common";
import { StyleCopyModuleBase } from "./base/styleCopy.module.base";
import { StyleCopyService } from "./styleCopy.service";
import { StyleCopyController } from "./styleCopy.controller";
import { StyleCopyResolver } from "./styleCopy.resolver";

@Module({
  imports: [StyleCopyModuleBase],
  controllers: [StyleCopyController],
  providers: [StyleCopyService, StyleCopyResolver],
  exports: [StyleCopyService],
})
export class StyleCopyModule {}
