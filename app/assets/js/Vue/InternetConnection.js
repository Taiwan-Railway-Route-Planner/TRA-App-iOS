/**
 Created by svend on 11/08/2019.
 **/

import { Connectivity } from '@nativescript/core'
export function checkInternetConnection() {
    const myConnectionType = Connectivity.getConnectionType();
    switch (myConnectionType) {
        case Connectivity.connectionType.none:
            return false;
        case Connectivity.connectionType.wifi:
        case Connectivity.connectionType.mobile:
        case Connectivity.connectionType.ethernet:
        case Connectivity.connectionType.bluetooth:
            return true;
    }
}
