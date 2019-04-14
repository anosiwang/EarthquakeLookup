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
    var quake = new Object();

    //Calculate PGA
    quake.pga = x * 9.81; //Peak ground acceleration（m/s2)
    
    // quake.seismiCity // Seismicity
    // quake.seismicIntensity //Seismic Intensity
    

    //Calculate Seismic Intensity and Seismicity
    switch (quake.pga) {
        case 0<=pga<0.22 : 
            quake.seismicIntensity = "I, II, III, IIII";
            quake.seismiCity = "<3.7";
            break;
        case 0.22<=pga<0.45 : 
            quake.seismicIntensity = "V";
            quake.seismiCity = "4.3";
            break;
        case 0.45<=pga<0.90 :
            quake.seismicIntensity = "VI"; 
            quake.seismiCity = "4.9";
            break;
        case 0.90<=pga<1.78 :
            quake.seismicIntensity = "VII"; 
            quake.seismiCity = "5.5";
            break;
        case 1.78<=pga<3.54 :
            quake.seismicIntensity = "VIII"; 
            quake.seismiCity = "6.1";
            break;
        case 3.54<=pga<7.08 :
            quake.seismicIntensity = "IX"; 
            quake.seismiCity = "6.7";
            break;
        case 7.08<=pga<14.15 :
            quake.seismicIntensity = "X";
            quake.seismiCity = "7.3";
            break;
        case 14.15<=pga :
            quake.seismicIntensity = "XI, XII";
            quake.seismiCity = ">7.9";  
            break;
        default: 
            quake.seismicIntensity = "Unknown Error";
            quake.seismiCity = "Unknown Error";
    };
    return (quake);
}