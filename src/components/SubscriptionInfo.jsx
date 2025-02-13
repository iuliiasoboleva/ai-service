"use client";
import React from "react";

function SubscriptionInfo({ userInfo }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 font-montserrat text-gray-800">
        Подписка
      </h3>
      <p className="text-gray-600 font-roboto mb-2">{userInfo.subscription}</p>
      <p className="text-sm text-gray-500 font-roboto mb-2">
        Следующий платеж: {userInfo.nextBilling}
      </p>
      <p className="text-sm text-gray-500 font-roboto">
        Проекты: {userInfo.projectsUsed} / {userInfo.projectLimit}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{
            width: `${(userInfo.projectsUsed / userInfo.projectLimit) * 100}%`,
          }}
        ></div>
      </div>
      <button className="mt-4 text-blue-600 hover:text-blue-700 font-roboto">
        Управление подпиской
      </button>
    </div>
  );
}

export default SubscriptionInfo;
