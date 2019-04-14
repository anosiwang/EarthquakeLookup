// 
// Title: EARTHQUAKE CALCULATER
// Author: Anosi Wang
// Date: April 14, 2019
// 
// Description:
// According to "General Ruler for Earthquke Magnitude" by the Chinese 
// State Administration for Market Regulation and "Statistical 
// analysis of historical earthquake intensity in Chinese mainland" 
// by Shao Dan, Sun Zhe and Tian Qinhu.



function earthquakeCal (x) {
    var quake = {
        pga: (x * 9.81).toFixed(2),//Peak ground acceleration（m/s2)
        seismicIntensity: "",
        seismiCity: "" 
    };

    //Calculate PGA
    
    // quake.seismiCity // Seismicity
    // quake.seismicIntensity //Seismic Intensity
    

    //Calculate Seismic Intensity and Seismicity
    Number(quake.pga);
    if (0<=quake.pga && quake.pga<0.22) {
        quake.seismicIntensity = "I, II, III, IIII";
        quake.seismiCity = "<3.7";
    } else if (0.22<=quake.pga && quake.pga<0.45) {
        quake.seismicIntensity = "V";
        quake.seismiCity = "4.3";
    } else if (0.45<=quake.pga && quake.pga<0.90) {
        quake.seismicIntensity = "VI"; 
        quake.seismiCity = "4.9";
    } else if (0.90<=quake.pga && quake.pga<1.78) {
        quake.seismicIntensity = "VII"; 
        quake.seismiCity = "5.5";
    } else if (1.78<=quake.pga && quake.pga<3.54) {
        quake.seismicIntensity = "VIII"; 
        quake.seismiCity = "6.1";
    } else if (3.54<=quake.pga && quake.pga<7.08) {
        quake.seismicIntensity = "IX"; 
        quake.seismiCity = "6.7";
    } else if (7.08<=quake.pga && quake.pga<14.15) {
        quake.seismicIntensity = "X";
        quake.seismiCity = "7.3";
    } else if (14.15<=quake.pga) {
        quake.seismicIntensity = "XI, XII";
        quake.seismiCity = ">7.9";  
    } else {
        quake.seismicIntensity = "Unknown Error";
        quake.seismiCity = "Unknown Error";
    };
   return (quake);
}; 