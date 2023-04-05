import {Controller} from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import {Get} from "@tsed/schema";

@Controller("/demo")
export class HelloWorldController {
   
    @Get("/")
    get() {
        return "You Have Reached the Demo!";  
    }

    @Get("/hello:name")
    hello(@PathParams("name") name: string) {
    return `Hello ${name}!`;
    }

}
