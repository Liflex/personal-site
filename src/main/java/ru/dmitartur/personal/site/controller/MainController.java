package ru.dmitartur.personal.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    @GetMapping(value = "/")
    public ModelAndView mainPage() {
        return new ModelAndView("login");
    }
}
