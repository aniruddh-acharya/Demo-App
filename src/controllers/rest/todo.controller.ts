import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/todo")
export class TodoController {
  @Get("/")
  get() {
    return "hello";
  }
}
