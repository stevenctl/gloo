
package serviceentry

import "strings"

func parseIstioProtocol(protocol string) string {
	protocol = strings.ToUpper(protocol)
	if idx := strings.Index(protocol, "-"); idx != -1 {
		protocol = protocol[:idx]
	}
	return protocol
}

func isProtocolTLS(protocol string) bool {
	p := parseIstioProtocol(protocol)
	return p == "HTTPS" || p == "TLS"
}
