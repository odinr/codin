using Data.Common;
using Microsoft.Extensions.Configuration;
using System;
using System.Runtime.InteropServices;

namespace Test.Data {
    public static class GrepAdminDataHelper {



        private static string GetConfigSection(string section, string property) {

            var env = RuntimeInformation.IsOSPlatform(OSPlatform.OSX)
                ? "Docker"
                : AppEnvironment.Development.ToString();

            var configuration = new ConfigurationBuilder()
                                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                                .AddJsonFile($"appsettings.{env}.json", optional: true)
                                .Build();

            var value = configuration.GetSection(section)
                                     .GetValue<string>(property);
            return value;

        }

        public static Guid SystemUserId => new Guid(GetConfigSection("AppSettings", "SystemUserId"));
        public static string DbConnectionString => GetConfigSection("ConnectionStrings", "Connection");
        


    }
}
