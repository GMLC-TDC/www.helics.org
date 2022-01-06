<article class="prose prose-lg max-w-none">
  <h2>Showcase of tools with HELICS support</h2>
  <p>
    The following list of tools is a list of tools that have worked with HELICS at some level either
    on current projects or in the past, or in some cases funded projects that will be working with
    certain tools. These tools are in various levels of development. Check the corresponding links
    for more information.
  </p>
  <h3 id="power-systems-tools">Power Systems Tools</h3>
  <h4 id="electric-distribution-system-simulation">Electric Distribution System Simulation</h4>
  <ul class="list-disc">
    <li>
      <a href="https://www.gridlabd.org/">GridLAB-D</a>, an open-source tool for distribution
      power-flow, DER models, basic house thermal and end-use load models, and more. HELICS support
      currently (8/15/2018) provided in the
      <a href="https://github.com/gridlab-d/gridlab-d/tree/develop"><code>develop</code> branch</a>
      which you have to build yourself as described
      <a href="https://github.com/GMLC-TDC/HELICS-Tutorial/tree/master/setup">here</a>. Or a CMake
      based <a href="https://github.com/GMLC-TDC/gridlab-d">branch</a> maintained as part of the
      <a href="https://github.com/GMLC-TDC">GMLC-TDC organization</a>.
    </li>
    <li>
      <a href="https://smartgrid.epri.com/SimulationTool.aspx">OpenDSS</a>, an open-source tool for
      distribution powerflow, DER models, harmonics, and other capabilities traditionally found in
      commercial distribution analysis tools. There are two primary interfaces with HELICS support:
      <ul class="list-circ">
        <li>
          <a href="https://github.com/dss-extensions/OpenDSSDirect.py">OpenDSSDirect.py</a> which provides
          a “direct” interface to interact with the OpenDSS engine enabling support for non-Windows (Linux,
          OSX) systems.
        </li>
        <li>
          <a href="https://github.com/NREL/PyDSS">PyDSS</a> which builds on OpenDSSDirect to provide
          enhanced advanced inverter models and significantly more robust convergence with high-penetration
          DER controls along with flexible support for user-defined controls and visualization.
        </li>
      </ul>
    </li>
    <li>
      <a href="http://www.cyme.com/software/cymdist/">CYME</a> has been used in connection with a python
      wrapper interface and through FMI wrapper.
    </li>
  </ul>
  <h4 id="electric-transmission-system-simulation">Electric Transmission System Simulation</h4>
  <ul class="list-disc">
    <li>
      <a href="https://github.com/LLNL/GridDyn">GridDyn</a>, an open-source transmission power flow
      and dynamics simulator. HELICS support provided through the
      <a href="https://github.com/LLNL/GridDyn/tree/cmake_update"
        ><code>cmake_updates</code> branch</a
      >.
    </li>
    <li>
      <a href="https://github.com/kdheepak/psst">PSST</a>, an open-source python-based
      unit-commitment and dispatch market simulator. HELICS examples are included in the
      <a href="https://github.com/GMLC-TDC/HELICS-Tutorial">HELICS-Tutorial.</a>
    </li>
    <li>
      <a href="http://www.pserc.cornell.edu/matpower/">MATPOWER</a>, an open-source Matlab based
      power flow and optimal power flow tool. HELICS support under development.
    </li>
    <li>
      <a href="http://www.interpss.org/">InterPSS</a>, a Java-based power systems simulator. HELICS
      support under development.
      <a href="https://gmlc-tdc.github.io/HELICS-Use-Cases/PNNL-TD-Dynamic-Load/index.html"
        >Use case instructions</a
      >.
    </li>
    <li>
      <a href="https://github.com/GMLC-TDC/PSLF-wrapper">PSLF</a> has some level of support using the
      experimental python interface.
    </li>
    <li>
      <a
        href="https://new.siemens.com/global/en/products/energy/services/transmission-distribution-smart-grid/consulting-and-planning/pss-software/pss-e.html"
        >PSS/E</a
      >.
    </li>
    <li>
      <a href="https://www.powerworld.com/">PowerWorld</a> Simulator is an interactive power system simulation
      package designed to simulate high voltage power system operation on a time frame ranging from several
      minutes to several days.
    </li>
    <li>
      <a href="https://pypi.org/project/PYPOWER/">PyPower</a> does not have a standard HELICS
      integration but it has been used on various projects. PYPOWER is a power flow and Optimal
      Power Flow (OPF) solver. It is a port of MATPOWER to the Python programming language. Current
      features include:
      <ul class="list-circ">
        <li>DC and AC (Newton’s method &amp; Fast Decoupled) power flow and</li>
        <li>DC and AC optimal power flow (OPF)</li>
      </ul>
    </li>
  </ul>
  <h4 id="real-time-simulators">Real time simulators</h4>
  <ul class="list-disc">
    <li>
      <a href="https://www.opal-rt.com/hardware-in-the-loop/">OpalRT</a> A few projects are using HELICS
      to allow connections between Opal RT and other simulations.
    </li>
    <li>
      <a href="https://www.rtds.com/">RTDS</a> Some planning or testing for RTDS linkages to HELICS is
      underway and will be required for some known projects.
    </li>
  </ul>
  <h4 id="electric-power-market-simulation">Electric Power Market simulation</h4>
  <ul class="list-disc">
    <li>
      <a href="https://github.com/NREL/FESTIV_MODEL">FESTIV</a>, the Flexible Energy Scheduling Tool
      for Integrating Variable Generation, provides multi-timescale steady-state power system
      operations simulations that aims to replicate the full time spectrum of scheduling and reserve
      processes (multi-step commitment and dispatch plus simplified AGC) to meet energy and
      reliability needs of the bulk power system.
    </li>
    <li>
      <a href="https://energyexemplar.com/solutions/plexos/">PLEXOS</a>, a commercial production
      cost simulator. Support via OpenPLEXOS is under development.
    </li>
    <li>
      <a href="http://www.pserc.cornell.edu/matpower/">MATPOWER</a> (described above) also includes basic
      optimal powerflow support.
    </li>
    <li>
      <a href="https://pypi.org/project/PYPOWER/">PyPower</a> (described above) also includes basic AC
      and DC optimal powerflow solvers.
    </li>
  </ul>
  <h4 id="contingency-analysis-tools">Contingency Analysis tools</h4>
  <ul class="list-disc">
    <li>
      <a
        href="https://new.siemens.com/global/en/products/energy/services/transmission-distribution-smart-grid/consulting-and-planning/pss-software/psscape.html"
        >CAPE</a
      > protection system modeling.
    </li>
    <li>
      <a href="https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-26197.pdf"
        >DCAT</a
      > Dynamic contingency analysis tool.
    </li>
  </ul>
  <h3 id="communication-tools">Communication Tools</h3>
  <ul class="list-disc">
    <li>
      HELICS provides built-in support for simple communications manipulations such as delays, lossy
      channels, etc. through its built-in filters.
    </li>
    <li>
      <a href="https://www.nsnam.org/">ns-3</a>, a discrete-event communication network simulator.
      This is supported via the
      <a href="https://github.com/GMLC-TDC/helics-ns3">HELICS ns-3 module</a>.
    </li>
    <li>
      <a href="https://omnetpp.org/">OMNet++</a> is a public-source, component-based, modular and
      open-architecture simulation environment with strong GUI support and an embeddable simulation
      kernel. Its primary application area is the simulation of communication networks, but it has
      been successfully used in other areas like the simulation of IT systems, queueing networks,
      hardware architectures and business processes as well. Early stage development with OMNET++
      and HELICS is underway and a prototype example is available in
      <a href="https://github.com/GMLC-TDC/helics-omnetpp">HELICS-omnetpp</a>.
    </li>
  </ul>
  <h3 id="gas-pipeline-modeling">Gas Pipeline Modeling</h3>
  <ul class="list-disc">
    <li>
      <a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.172.1169">NGFAST</a>
    </li>
    <li><a href="https://github.com/lanl-ansi/GasModels.jl">GasModels.jl</a></li>
  </ul>
  <h3 id="optimization-packages">Optimization packages</h3>
  <ul class="list-disc">
    <li><a href="https://www.gams.com/">GAMS</a></li>
    <li>
      <a href="https://www.juliaopt.org/">JuMP</a> support is provided through the HELICS Julia interface
    </li>
  </ul>
  <h3 id="transportation-modeling">Transportation modeling</h3>
  <ul class="list-disc">
    <li><a href="http://beam.lbl.gov/">BEAM.</a></li>
    <li>
      <a href="https://www.anl.gov/es/polaris-transportation-system-simulation-tool">POLARIS.</a>
    </li>
  </ul>
</article>
