/*
 * -*- coding: utf-8 -*-
 * vim: tabstop=4 shiftwidth=4 softtabstop=4
 *
 * oq-geoviewer
 * Copyright (C) 2018 GEM Foundation
 *
 * oq-geoviewer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * oq-geoviewer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function run(latlng, info) {
    // var table = '';
    // var layers = info.getElementsByTagName("Layer");
    // for (l = 0; l < layers.length; l++) {
    //     table += '<table class="table table-hover table-sm">' +
    //              '<thead class="thead-light"><tr><th scope="col" colspan="2">' +
    //              layers[l].getAttribute('name') +
    //              '</th></tr></thead>';
    //     var attribute = layers[l].getElementsByTagName("Attribute")[0];
    //     table += '<tr><th scope="row">10% poe in 50 years</th><td>';
    //     table += attribute.getAttribute('value');
    //     table += '</td></tr>';
    //     table += '</table>';
    // };
    if (attribute.getAttribute('value') != '0') { display(latlng, info); }
}
