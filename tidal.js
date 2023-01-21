import java.io.IOException;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import net.tidal.TidalElevation;
import net.tidal.TidalElevationRequest;
import net.tidal.TidalElevationResponse;
import net.tidal.TidalException;

public class TidalExample {

    public static void main(String[] args) throws TidalException, IOException {

        // Use Tidal to calculate tides
        TidalElevationRequest request = new TidalElevationRequest();
        request.setLatitude(38.8977);
        request.setLongitude(-77.0366);
        request.setStartTime(ZonedDateTime.ofInstant(Instant.now(), ZoneId.of("UTC")));
        request.setEndTime(ZonedDateTime.ofInstant(Instant.now().plusSeconds(3600), ZoneId.of("UTC")));
        request.setInterval(60);
        TidalElevationResponse response = TidalElevation.getElevations(request);

        // Generate HTML to display tides
        StringBuilder html = new StringBuilder();
        html.append("<html>\n");
        html.append("<head>\n");
        html.append("<title>Tidal Elevations</title>\n");
        html.append("</head>\n");
        html.append("<body>\n");
        html.append("<table>\n");
        html.append("<tr>\n");
        html.append("<th>Time</th>\n");
        html.append("<th>Elevation (m)</th>\n");
        html.append("</tr>\n");

        List<TidalElevationResponse.Elevation> elevations = response.getElevations();
        for (TidalElevationResponse.Elevation elevation : elevations) {
            html.append("<tr>\n");
            html.append("<td>" + elevation.getTime() + "</td>\n");
            html.append("<td>" + elevation.getElevation() + "</td>\n");
            html.append("</tr>\n");
        }

        html.append("</table>\n");
        html.append("</body>\n");
        html.append("</html>\n");

        // Print the generated HTML
        System.out.println(html.toString());
    }
}
