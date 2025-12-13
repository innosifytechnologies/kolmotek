/**
 * KolmoTek Instruments Website
 * @authors R.CHARAN & S ANANDH
 * @company Innosify Pvt Ltd
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProductGroupPage from "./pages/ProductGroupPage";
import CodeOfConduct from "./pages/CodeOfConduct";
import TermsAndConditions from "./pages/TermsAndCondition";

// Laser Based System Products:
import LaserInterferometer from "./pages/ProductGroup/Product/laserInterferometer";
import PIVSystem from "./pages/ProductGroup/Product/PIVSystem";
import LIDARSystem from "./pages/ProductGroup/Product/LightDetectionAndRanging";
import LIBSSystem from "./pages/ProductGroup/Product/LaserInducedBreakdownSpectroscopy";
import DICSystem from "./pages/ProductGroup/Product/dicSystem";
import TLSSystem from "./pages/ProductGroup/Product/TerrestrialLaserScanningSystem";

// Acoustic Instruments Products:
import EchoSounder from "./pages/ProductGroup/Product/EchoSounder";
import AcousticDopplerCurrentProfiler from "./pages/ProductGroup/Product/AcousticDopplerCurrentProfiler";
import AcousticDopplerVelocimeter from "./pages/ProductGroup/Product/AcousticDopplerVelocimeter";

// Acoustic Instruments Products:
import UnmannedAerialVehicle from "./pages/ProductGroup/Product/UnmannedAerialVehicle";
import AutonomousAerialVehicles from "./pages/ProductGroup/Product/AutonomousAerialVehicles";

// UnderWater Survey Systems Products:
import AutonomousUnderwaterVehicles from "./pages/ProductGroup/Product/AutonomousUnderwaterVehicles";
import RemotelyOperatedVehicles from "./pages/ProductGroup/Product/RemotelyOperatedVehicles";

// RF Microwave Systems Products:
import RadioDetectionRangingSystem from "./pages/ProductGroup/Product/RadioDetectionRangingSystem";
import SeaSurfaceRadar from "./pages/ProductGroup/Product/SeaSurfaceRadar";

// Strain Gauge System Products:
import LoadCell from "./pages/ProductGroup/Product/LoadCell";
import PressureSensor from "./pages/ProductGroup/Product/PressureSensors";

// import PressureSensors from "./pages/Product/PressureSensors";
import Application from "./pages/Application";
import ApplicationPage from "./pages/Application";
import FlowVisualizationPage from "./pages/Application/FlowVisualization";
import HydrographicSurveyPage from "./pages/Application/HydrographicSurvey";
import AerialSurveyPage from "./pages/Application/AerialSurveyPage";
import StructuralHealthMonitoringPage from "./pages/Application/StructuralHealthMonitoring";
import DeepSeaExplorationPage from "./pages/Application/DeepSeaExploration";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LaserBasedProductsPage from "./pages/ProductGroup/LaserBasedSystem";
import AcousticInstrumentsPage from "./pages/ProductGroup/AcousticInstruments";
import AerialSurveySystemsPage from "./pages/ProductGroup/AerialSurveySystems";
import UnderWaterSurveySystemsPage from "./pages/ProductGroup/UnderWaterSurveySystem";
import RFMicrowaveSystemsPage from "./pages/ProductGroup/RF&MicrowaveSystem";
import StrainGaugeSystemPage from "./pages/ProductGroup/StrainGaugeSystems";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 bg-white">
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
      </main>
      <Footer />
    </div >
  );
};

export default App;
