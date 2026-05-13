"use client"

const timelineData = [
  {
    tag: "DRONE PROMOTION & USAGE POLICY 2022",
    title: "Government of Gujarat Policy Initiative",
    description: "Under the Drone Promotion & Usage Policy-2022, a provision of ₹600 lakh was made to establish a Drone Training & Co-ordination Centre at Police Wireless Training Centre, GPA Campus, Karai.",
    table: {
      headers: ["Details", "Sanction Strength", "Amount (₹ in Lac/11 months)"],
      rows: [
        ["Senior Drone Pilot Trainer", "1", "16.50"],
        ["Drone Pilot Trainer", "4", "44.00"],
        ["Total", "5", "60.50"],
      ],
    },
  },
  {
    tag: "CDCC COMMITTEE 2022",
    title: "Drone Training Assignment to ADGP Technical Services",
    description: "The CDCC Committee was formed in 2022. Responsibility for drone and anti-drone training was assigned to ADGP Technical Services — establishing a structured command for drone operations.",
  },
  {
    tag: "TRANSITION TO GPDTI",
    title: "Renaming and Staffing Modifications",
    description: "The DT&CC was redesignated as Gujarat Police Drone Training Institute (GPDTI). Focus shifted to training Gujarat Police staff as DGCA-approved Remote Pilot Certificate holders — eliminating dependency on outsourced pilots.",
  },
  {
    tag: "OFFICIAL IDENTITY",
    title: "GPDTI's Official Logo",
    logoCard: true,
    logoText: "Gujarat Police Drone Training Institute",
    logoDesc: "Official logo established — marking GPDTI as a recognized state police-run, DGCA-approved Remote Pilot Training Organization across Gujarat.",
  },
]

export default function EstablishmentSection() {
  return (
    <section id="establishment" className="relative py-16 overflow-hidden">
      {/* Background Restoration - Matching Operations Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6">
            <span className="text-[10px] sm:text-xs text-[#00e5ff] font-bold tracking-widest uppercase">Establishment & History</span>
          </div>
          <h2 className="font-[family-name:var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Establishment of <span className="text-gradient">GPDTI</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed tracking-wide">
            From policy to institution — the journey of Gujarat Police Drone Training Institute.
          </p>
        </div>
        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical Line - Visible Static Teal */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-[#00e5ff]/40" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative section-fade-in">
                {/* Glowing Dot - Perfectly centered on the vertical line */}
                <div className="absolute left-[-37px] md:left-[-53px] top-2 w-3 h-3 rounded-full bg-[#00e5ff] shadow-[0_0_15px_#00e5ff] z-20" />
                
                {/* Content Card - Enhanced Border Visibility */}
                <div className="bg-white/[0.06] border border-[#00e5ff]/40 rounded-[12px] p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#00e5ff]/60 shadow-[0_0_20px_rgba(0,229,255,0.05)]">
                  <span className="text-[10px] font-bold text-[#00e5ff] tracking-widest uppercase mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="text-sm md:text-[14px] font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  
                  {item.logoCard ? (
                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                        <img 
                          src="/images/logo.png" 
                          alt="GPDTI Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-white font-bold text-sm mb-1">{item.logoText}</p>
                        <p className="text-[12px] text-muted-foreground leading-relaxed">
                          {item.logoDesc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[12px] text-muted-foreground leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {item.table && (
                        <div className="overflow-hidden rounded-lg border border-white/10 mt-6">
                          <table className="w-full text-left text-[11px] md:text-[12px]">
                            <thead>
                              <tr className="bg-[#00e5ff] text-[#0a0f1e] font-bold">
                                {item.table.headers.map((header, hIndex) => (
                                  <th key={hIndex} className="px-4 py-2.5">{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="text-white/80">
                              {item.table.rows.map((row, rIndex) => (
                                <tr key={rIndex} className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${rIndex === item.table.rows.length - 1 ? 'font-bold text-white bg-white/[0.03]' : ''}`}>
                                  {row.map((cell, cIndex) => (
                                    <td key={cIndex} className="px-4 py-2.5">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
