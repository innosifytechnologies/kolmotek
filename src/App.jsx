import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NoIndex from "./components/NoIndex";

// Fallback component for Suspense
const Loading = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
  </div>
);

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductGroupPage = lazy(() => import("./pages/ProductGroupPage"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndCondition"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Laser Based System Products:
const LaserInterferometer = lazy(() => import("./pages/ProductGroup/Product/laserInterferometer"));
const PIVSystem = lazy(() => import("./pages/ProductGroup/Product/PIVSystem"));
const LIDARSystem = lazy(() => import("./pages/ProductGroup/Product/LightDetectionAndRanging"));
const LIBSSystem = lazy(() => import("./pages/ProductGroup/Product/LaserInducedBreakdownSpectroscopy"));
const DICSystem = lazy(() => import("./pages/ProductGroup/Product/dicSystem"));
const TLSSystem = lazy(() => import("./pages/ProductGroup/Product/TerrestrialLaserScanningSystem"));

// Acoustic Instruments Products:
const EchoSounder = lazy(() => import("./pages/ProductGroup/Product/EchoSounder"));
const AcousticDopplerCurrentProfiler = lazy(() => import("./pages/ProductGroup/Product/AcousticDopplerCurrentProfiler"));
const AcousticDopplerVelocimeter = lazy(() => import("./pages/ProductGroup/Product/AcousticDopplerVelocimeter"));

// Aerial Survey Products:
const UnmannedAerialVehicle = lazy(() => import("./pages/ProductGroup/Product/UnmannedAerialVehicle"));
const AutonomousAerialVehicles = lazy(() => import("./pages/ProductGroup/Product/AutonomousAerialVehicles"));

// UnderWater Survey Systems Products:
const AutonomousUnderwaterVehicles = lazy(() => import("./pages/ProductGroup/Product/AutonomousUnderwaterVehicles"));
const RemotelyOperatedVehicles = lazy(() => import("./pages/ProductGroup/Product/RemotelyOperatedVehicles"));

// RF Microwave Systems Products:
const RadioDetectionRangingSystem = lazy(() => import("./pages/ProductGroup/Product/RadioDetectionRangingSystem"));
const SeaSurfaceRadar = lazy(() => import("./pages/ProductGroup/Product/SeaSurfaceRadar"));

// Strain Gauge System Products:
const LoadCell = lazy(() => import("./pages/ProductGroup/Product/LoadCell"));
const PressureSensor = lazy(() => import("./pages/ProductGroup/Product/PressureSensors"));

// Application Pages:
const Application = lazy(() => import("./pages/Application"));
const ApplicationPage = lazy(() => import("./pages/Application"));
const FlowVisualizationPage = lazy(() => import("./pages/Application/FlowVisualization"));
const HydrographicSurveyPage = lazy(() => import("./pages/Application/HydrographicSurvey"));
const AerialSurveyPage = lazy(() => import("./pages/Application/AerialSurveyPage"));
const StructuralHealthMonitoringPage = lazy(() => import("./pages/Application/StructuralHealthMonitoring"));
const DeepSeaExplorationPage = lazy(() => import("./pages/Application/DeepSeaExploration"));

const LaserBasedProductsPage = lazy(() => import("./pages/ProductGroup/LaserBasedSystem"));
const AcousticInstrumentsPage = lazy(() => import("./pages/ProductGroup/AcousticInstruments"));
const AerialSurveySystemsPage = lazy(() => import("./pages/ProductGroup/AerialSurveySystems"));
const UnderWaterSurveySystemsPage = lazy(() => import("./pages/ProductGroup/UnderWaterSurveySystem"));
const RFMicrowaveSystemsPage = lazy(() => import("./pages/ProductGroup/RF&MicrowaveSystem"));
const StrainGaugeSystemPage = lazy(() => import("./pages/ProductGroup/StrainGaugeSystems"));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <NoIndex />
      <Navbar />
      <main className="flex-1 bg-white">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/CodeOfConduct" element={<CodeOfConduct />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
            <Route path="/ProductGroup" element={<ProductGroupPage />} />
            <Route
              path="/ProductGroup/LaserInstruments"
              element={<LaserBasedProductsPage />}
            />
            <Route
              path="/ProductGroup/AcousticInstruments"
              element={<AcousticInstrumentsPage />}
            />
            <Route
              path="/ProductGroup/AerialSurveySystems"
              element={<AerialSurveySystemsPage />}
            />
            <Route
              path="/ProductGroup/UnderWaterSurveySystems"
              element={<UnderWaterSurveySystemsPage />}
            />
            <Route
              path="/ProductGroup/RFMicrowaveInstruments"
              element={<RFMicrowaveSystemsPage />}
            />
            <Route
              path="/ProductGroup/StrainGaugeInstruments"
              element={<StrainGaugeSystemPage />}
            />

            {/* Laser Based System Products: */}
            <Route
              path="/ProductGroup/LaserInstruments/LaserInterferometer"
              element={<LaserInterferometer />}
            />
            <Route
              path="/ProductGroup/LaserInstruments/LIDARSystem"
              element={<LIDARSystem />}
            />
            <Route
              path="/ProductGroup/LaserInstruments/PIVSystem"
              element={<PIVSystem />}
            />
            <Route
              path="/ProductGroup/LaserInstruments/LIBSSystem"
              element={<LIBSSystem />}
            />
            <Route
              path="/ProductGroup/LaserInstruments/DICSystem"
              element={<DICSystem />}
            />
            <Route
              path="/ProductGroup/LaserInstruments/TLSSystem"
              element={<TLSSystem />}
            />

            {/* Acoustic Instruments Products: */}

            <Route
              path="/AcousticInstruments/EchoSounder"
              element={<EchoSounder />}
            />
            <Route
              path="/AcousticInstruments/AcousticDopplerCurrentProfiler"
              element={<AcousticDopplerCurrentProfiler />}
            />
            <Route
              path="/AcousticInstruments/AcousticDopplerVelocimeter"
              element={<AcousticDopplerVelocimeter />}
            />

            {/* Aerial Survey Systems Page: */}

            <Route
              path="/AerialSurveySystems/UnmannedAerialVehicle"
              element={<UnmannedAerialVehicle />}
            />

            <Route
              path="/AerialSurveySystems/AutonomousAerialVehicles"
              element={<AutonomousAerialVehicles />}
            />

            {/* Under Water Survey System: */}

            <Route
              path="/UnderWaterSurveySystems/AutonomousUnderwaterVehicles"
              element={<AutonomousUnderwaterVehicles />}
            />

            <Route
              path="/UnderWaterSurveySystems/RemotelyOperatedVehicles"
              element={<RemotelyOperatedVehicles />}
            />

            {/* RF & Microwave System: */}
            <Route
              path="/RFMicrowaveInstruments/RadioDetectionRangingInstruments"
              element={<RadioDetectionRangingSystem />}
            />
            <Route
              path="/RFMicrowaveInstruments/SeaSurfaceRadar"
              element={<SeaSurfaceRadar />}
            />

            {/* Strain Gauge System: */}
            <Route
              path="/StrainGaugeInstruments/LoadCell"
              element={<LoadCell />}
            />
            <Route
              path="/StrainGaugeInstruments/PressureSensors"
              element={<PressureSensor />}
            />

            <Route path="/application" element={<Application />} />

            <Route path="/Application" element={<ApplicationPage />} />
            <Route
              path="/Application/FlowVisualization"
              element={<FlowVisualizationPage />}
            />
            <Route
              path="/Application/HydrographicSurvey"
              element={<HydrographicSurveyPage />}
            />
            <Route
              path="/Application/AerialSurveyPage"
              element={<AerialSurveyPage />}
            />
            <Route
              path="/Application/StructuralHealthMonitoring"
              element={<StructuralHealthMonitoringPage />}
            />
            <Route
              path="/Application/DeepSeaExploration"
              element={<DeepSeaExplorationPage />}
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
