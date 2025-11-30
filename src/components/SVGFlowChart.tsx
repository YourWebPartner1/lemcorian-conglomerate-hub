const SVGFlowChart = () => {
  // SVG dimensions
  const svgWidth = 1200;
  const svgHeight = 750;
  
  // Node positions
  const rootX = svgWidth / 2;
  const rootY = 80;
  
  const divisionY = 250;
  const divisionSpacing = 280;
  const division1X = svgWidth / 2 - divisionSpacing;
  const division2X = svgWidth / 2;
  const division3X = svgWidth / 2 + divisionSpacing;
  
  const subItemY = 420;
  const subItemSpacing = 100;
  // Agricultural Products branch positions (side-by-side)
  const coffeeBranchX = division1X - 80; // Left branch for Coffee
  const vegetableBranchX = division1X + 80; // Right branch for Vegetables
  const branchStartY = 350; // Where branches start from Agricultural Products
  const branchItemY = 380; // Starting Y for branch items
  const branchItemSpacing = 35; // Vertical spacing between items
  
  return (
    <div className="w-full py-8 md:py-12 bg-muted/20 rounded-lg overflow-x-auto">
      <div className="flex justify-center">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="max-w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for arrow markers */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill="hsl(var(--primary))"
              />
            </marker>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Root Node - Lemcorian */}
          <g>
            <rect
              x={rootX - 120}
              y={rootY - 35}
              width="240"
              height="70"
              rx="12"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              filter="url(#shadow)"
              className="transition-all duration-300 hover:stroke-[4]"
            />
            <text
              x={rootX}
              y={rootY + 8}
              textAnchor="middle"
              className="font-serif text-2xl font-bold fill-foreground"
              style={{ fontSize: "28px" }}
            >
              Lemcorian
            </text>
          </g>

          {/* Connector Line from Root to Divisions */}
          <line
            x1={rootX}
            y1={rootY + 35}
            x2={rootX}
            y2={divisionY - 60}
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            markerEnd="url(#arrowhead)"
          />

          {/* Division 1: Agricultural Products */}
          <g>
            {/* Main Division Box */}
            <rect
              x={division1X - 110}
              y={divisionY - 40}
              width="220"
              height="60"
              rx="10"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
              className="transition-all duration-300 hover:stroke-[3.5]"
            />
            <text
              x={division1X}
              y={divisionY - 5}
              textAnchor="middle"
              className="font-semibold fill-foreground"
              style={{ fontSize: "18px" }}
            >
              Agricultural Products
            </text>

            {/* Connector from Agricultural Products to branch split point */}
            <line
              x1={division1X}
              y1={divisionY + 20}
              x2={division1X}
              y2={branchStartY}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />

            {/* Branch split connectors - one to Coffee (left), one to Vegetables (right) */}
            <line
              x1={division1X}
              y1={branchStartY}
              x2={coffeeBranchX}
              y2={branchStartY}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1={coffeeBranchX}
              y1={branchStartY}
              x2={coffeeBranchX}
              y2={branchItemY - 10}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            <line
              x1={division1X}
              y1={branchStartY}
              x2={vegetableBranchX}
              y2={branchStartY}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1={vegetableBranchX}
              y1={branchStartY}
              x2={vegetableBranchX}
              y2={branchItemY - 10}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Coffee Branch (Left Side) */}
            <g>
              {/* Branch Label: Coffee */}
              <rect
                x={coffeeBranchX - 50}
                y={branchItemY - 15}
                width="100"
                height="30"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={coffeeBranchX}
                y={branchItemY + 5}
                textAnchor="middle"
                className="font-semibold fill-foreground"
                style={{ fontSize: "13px" }}
              >
                Coffee
              </text>

              {/* Connector from Coffee label to items */}
              <line
                x1={coffeeBranchX}
                y1={branchItemY + 15}
                x2={coffeeBranchX}
                y2={branchItemY + 30}
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />

              {/* Speciality Coffee */}
              <rect
                x={coffeeBranchX - 60}
                y={branchItemY + 40}
                width="120"
                height="28"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={coffeeBranchX}
                y={branchItemY + 58}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "13px" }}
              >
                Speciality Coffee
              </text>

              {/* Common Coffee */}
              <rect
                x={coffeeBranchX - 60}
                y={branchItemY + 75}
                width="120"
                height="28"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={coffeeBranchX}
                y={branchItemY + 93}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "13px" }}
              >
                Common Coffee
              </text>
            </g>

            {/* Vegetables Branch (Right Side) */}
            <g>
              {/* Branch Label: Vegetables */}
              <rect
                x={vegetableBranchX - 60}
                y={branchItemY - 15}
                width="120"
                height="30"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={vegetableBranchX}
                y={branchItemY + 5}
                textAnchor="middle"
                className="font-semibold fill-foreground"
                style={{ fontSize: "13px" }}
              >
                Vegetables
              </text>

              {/* Connector from Vegetables label to items */}
              <line
                x1={vegetableBranchX}
                y1={branchItemY + 15}
                x2={vegetableBranchX}
                y2={branchItemY + 30}
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />

              {/* Onion */}
              <rect
                x={vegetableBranchX - 50}
                y={branchItemY + 40}
                width="100"
                height="28"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={vegetableBranchX}
                y={branchItemY + 58}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "13px" }}
              >
                Onion
              </text>

              {/* Ginger */}
              <rect
                x={vegetableBranchX - 50}
                y={branchItemY + 75}
                width="100"
                height="28"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={vegetableBranchX}
                y={branchItemY + 93}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "13px" }}
              >
                Ginger
              </text>

              {/* Garlic */}
              <rect
                x={vegetableBranchX - 50}
                y={branchItemY + 110}
                width="100"
                height="28"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={vegetableBranchX}
                y={branchItemY + 128}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "13px" }}
              >
                Garlic
              </text>

              {/* Potato */}
              <rect
                x={vegetableBranchX - 50}
                y={branchItemY + 145}
                width="100"
                height="28"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={vegetableBranchX}
                y={branchItemY + 163}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "13px" }}
              >
                Potato
              </text>
            </g>
          </g>

          {/* Arrow from Division 1 to Division 2 */}
          <line
            x1={division1X + 110}
            y1={divisionY - 10}
            x2={division2X - 110}
            y2={divisionY - 10}
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          {/* Division 2: Chemicals */}
          <g>
            {/* Main Division Box */}
            <rect
              x={division2X - 80}
              y={divisionY - 40}
              width="160"
              height="60"
              rx="10"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
              className="transition-all duration-300 hover:stroke-[3.5]"
            />
            <text
              x={division2X}
              y={divisionY - 5}
              textAnchor="middle"
              className="font-semibold fill-foreground"
              style={{ fontSize: "18px" }}
            >
              Chemicals
            </text>

            {/* Connector to Sub-items */}
            <line
              x1={division2X}
              y1={divisionY + 20}
              x2={division2X}
              y2={subItemY - 20}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Sub-items */}
            <rect
              x={division2X - 60}
              y={subItemY - 15}
              width="120"
              height="30"
              rx="6"
              fill="hsl(var(--card))"
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              filter="url(#shadow)"
            />
            <text
              x={division2X}
              y={subItemY + 5}
              textAnchor="middle"
              className="font-medium fill-muted-foreground"
              style={{ fontSize: "14px" }}
            >
              Industrial
            </text>

            <rect
              x={division2X - 60}
              y={subItemY + 25}
              width="120"
              height="30"
              rx="6"
              fill="hsl(var(--card))"
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              filter="url(#shadow)"
            />
            <text
              x={division2X}
              y={subItemY + 45}
              textAnchor="middle"
              className="font-medium fill-muted-foreground"
              style={{ fontSize: "14px" }}
            >
              Pharmaceutical
            </text>
          </g>

          {/* Arrow from Division 2 to Division 3 */}
          <line
            x1={division2X + 80}
            y1={divisionY - 10}
            x2={division3X - 130}
            y2={divisionY - 10}
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />

          {/* Division 3: Medical Equipment & Instruments */}
          <g>
            {/* Main Division Box */}
            <rect
              x={division3X - 130}
              y={divisionY - 40}
              width="260"
              height="60"
              rx="10"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
              className="transition-all duration-300 hover:stroke-[3.5]"
            />
            <text
              x={division3X}
              y={divisionY - 5}
              textAnchor="middle"
              className="font-semibold fill-foreground"
              style={{ fontSize: "18px" }}
            >
              Medical Equipment & Instruments
            </text>

            {/* Connector to Sub-items */}
            <line
              x1={division3X}
              y1={divisionY + 20}
              x2={division3X}
              y2={subItemY - 20}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Sub-items Grid */}
            <g>
              <rect
                x={division3X - 50}
                y={subItemY - 15}
                width="100"
                height="30"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={division3X}
                y={subItemY + 5}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "14px" }}
              >
                Syringes
              </text>

              <rect
                x={division3X - 50}
                y={subItemY + 25}
                width="100"
                height="30"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={division3X}
                y={subItemY + 45}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "14px" }}
              >
                Gloves
              </text>

              <rect
                x={division3X - 50}
                y={subItemY + 65}
                width="100"
                height="30"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={division3X}
                y={subItemY + 85}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "14px" }}
              >
                Masks
              </text>

              <rect
                x={division3X - 50}
                y={subItemY + 105}
                width="100"
                height="30"
                rx="6"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />
              <text
                x={division3X}
                y={subItemY + 125}
                textAnchor="middle"
                className="font-medium fill-muted-foreground"
                style={{ fontSize: "14px" }}
              >
                etc.
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SVGFlowChart;

