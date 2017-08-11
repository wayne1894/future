package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }
    public static Result clock() {
        return ok(clock.render());
    }
    public static Result paper() {
        return ok(paper.render());
    }
    public static Result picture() {
        return ok(picture.render());
    }
     public static Result light() {
         return ok(light.render());
     }
     public static Result video() {
         return ok(video.render());
     }
     public static Result star() {
         return ok(zoom.render());
     }
     public static Result fblogin() {
         return ok(fblogin.render());
     }

}
