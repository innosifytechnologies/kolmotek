import React, { useEffect, useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { useContext } from "react";
import ApplicationItem from "./ApplicationItem";

const Application = () => {
  const { applications } = useContext(ApplicationContext);
  const [softwareApplication, setSoftwareApplication] = useState([]);

  useEffect(() => {
    setSoftwareApplication(applications.slice());
  }, [applications]);

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mt-6">
      {softwareApplication.map((item, index) => (
        <ApplicationItem
          key={item.id || index}
          id={item.id}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Application;
