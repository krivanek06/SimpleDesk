import {InjectableRxStompConfig} from '@stomp/ng2-stompjs';
import {environment} from "../../../environments/environment";

export const stompConfig: InjectableRxStompConfig = {
  // Which server?
  brokerURL: environment.websockets, // ws://localhost:8082

  // Headers
  /*connectHeaders: {
    'Authorization': ''
  },*/


  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  reconnectDelay: 5000,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
