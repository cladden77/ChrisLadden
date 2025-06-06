import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import CaseStudyXora from "@/pages/case-study-xora";
import CaseStudyJfConsulting from "@/pages/case-study-jfconsulting";
import CaseStudyVibeCorp from "@/pages/case-study-vibecorp";
import CaseStudyTechFlow from "@/pages/case-study-techflow";
import ThankYou from "@/pages/thank-you";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/case-study/xora" component={CaseStudyXora} />
      <Route path="/case-study/jfconsulting" component={CaseStudyJfConsulting} />
      <Route path="/case-study/vibecorp" component={CaseStudyVibeCorp} />
      <Route path="/case-study/techflow" component={CaseStudyTechFlow} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
