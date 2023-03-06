import { NextPage } from "next";
import React from "react";
import Layout from "components/layout/Layout";

const TeamPage: NextPage = () => {
  return (
    <Layout>
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Team</h1>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default TeamPage;