import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import CaseStudyVinyl from "@/pages/case-study-vinyl";
import CaseStudyXCentric from "@/pages/case-study-xcentric";
import CaseStudyVibeCorp from "@/pages/case-study-vibecorp";
import CaseStudyTechFlow from "@/pages/case-study-techflow";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-study/vinyl" component={CaseStudyVinyl} />
      <Route path="/case-study/xcentric" component={CaseStudyXCentric} />
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
