import { ArrowRight } from "lucide-react";

const FlowChart = () => {
  return (
    <div className="w-full py-8 md:py-12 bg-muted/20 rounded-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Root Node - Lemcorian */}
        <div className="flex justify-center mb-8 md:mb-12" data-aos="fade-down">
          <div className="bg-card border-2 border-primary rounded-xl shadow-lg px-8 md:px-12 py-5 md:py-7">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center">
              Lemcorian
            </h3>
          </div>
        </div>

        {/* Connector Line from Root */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="w-1 h-8 md:h-12 bg-primary rounded-full"></div>
        </div>

        {/* Main Divisions Row - Horizontal Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8" data-aos="fade-up">
          {/* Agricultural Products */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="bg-card border-2 border-primary rounded-xl shadow-lg px-6 md:px-8 py-4 md:py-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[200px] md:min-w-[220px]">
              <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground">
                Agricultural Products
              </h4>
            </div>
            
            {/* Connector Line */}
            <div className="w-1 h-5 md:h-7 bg-primary mt-3 md:mt-4 rounded-full"></div>
            
            {/* Sub-items */}
            <div className="w-full md:w-auto mt-3 md:mt-4 space-y-2 md:space-y-2.5">
              {/* Coffee Subcategories */}
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground mb-1">Coffee</p>
                <div className="flex flex-col gap-1 mt-2">
                  <div className="bg-muted/50 rounded px-2 py-1 text-xs md:text-sm">Speciality Coffee</div>
                  <div className="bg-muted/50 rounded px-2 py-1 text-xs md:text-sm">Common Coffee</div>
                </div>
              </div>
              {/* Vegetables Items */}
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground mb-1">Vegetables</p>
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  <div className="bg-muted/50 rounded px-2 py-1 text-xs">Onion</div>
                  <div className="bg-muted/50 rounded px-2 py-1 text-xs">Ginger</div>
                  <div className="bg-muted/50 rounded px-2 py-1 text-xs">Garlic</div>
                  <div className="bg-muted/50 rounded px-2 py-1 text-xs">Potato</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:flex items-center justify-center text-primary my-8 md:my-0" data-aos="fade-left" data-aos-delay="100">
            <ArrowRight className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          {/* Chemicals */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="bg-card border-2 border-primary rounded-xl shadow-lg px-6 md:px-8 py-4 md:py-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[200px] md:min-w-[220px]">
              <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground">
                Chemicals
              </h4>
            </div>
            
            {/* Connector Line */}
            <div className="w-1 h-5 md:h-7 bg-primary mt-3 md:mt-4 rounded-full"></div>
            
            {/* Sub-items */}
            <div className="w-full md:w-auto mt-3 md:mt-4 space-y-2 md:space-y-2.5">
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground">Industrial</p>
              </div>
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground">Pharmaceutical</p>
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex items-center justify-center text-primary my-8 md:my-0" data-aos="fade-left" data-aos-delay="200">
            <ArrowRight className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          {/* Medical Equipment & Instruments */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="bg-card border-2 border-primary rounded-xl shadow-lg px-6 md:px-8 py-4 md:py-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[200px] md:min-w-[240px]">
              <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground">
                Medical Equipment & Instruments
              </h4>
            </div>
            
            {/* Connector Line */}
            <div className="w-1 h-5 md:h-7 bg-primary mt-3 md:mt-4 rounded-full"></div>
            
            {/* Sub-items */}
            <div className="w-full md:w-auto mt-3 md:mt-4 space-y-2 md:space-y-2.5">
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground">Syringes</p>
              </div>
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground">Gloves</p>
              </div>
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground">Masks</p>
              </div>
              <div className="bg-card border border-border rounded-lg shadow-sm px-4 md:px-5 py-2 md:py-2.5 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <p className="text-sm md:text-base font-medium text-muted-foreground">etc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
