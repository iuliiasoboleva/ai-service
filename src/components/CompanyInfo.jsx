"use client";
import React from "react";

function CompanyInfo({ userInfo }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 font-montserrat text-gray-800">
        Данные компании
      </h3>
      <p className="text-gray-600 font-roboto mb-2">{userInfo.companyName}</p>
      <p className="text-gray-600 font-roboto">{userInfo.email}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-700 font-roboto">
        Обновить данные
      </button>
    </div>
  );
}

export default CompanyInfo;
