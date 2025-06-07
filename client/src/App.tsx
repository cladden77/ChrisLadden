import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import CaseStudyXora from "@/pages/case-study-xora";
import CaseStudyJfConsulting from "@/pages/case-study-jfconsulting";
import CaseStudyShareArizona from "@/pages/case-study-sharearizona";
import CaseStudySeasons from "./pages/case-study-seasons";
import ThankYou from "@/pages/thank-you";
import NotFound from "@/pages/not-found";
import CaseStudyUnitedRealEstateGroup from "./pages/case-study-united-real-estate-group";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/case-study/xora" component={CaseStudyXora} />
      <Route path="/case-study/jfconsulting" component={CaseStudyJfConsulting} />
      <Route path="/case-study/sharearizona" component={CaseStudyShareArizona} />
      <Route path="/case-study/seasons" component={CaseStudySeasons} />
      <Route path="/case-study/unitedrealestategroup" component={CaseStudyUnitedRealEstateGroup} />
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
