import MermaidClient from "./mermaidClient"


export default async function MermaidTest() {
  const mermaidCode = `
  %%{
	init: {
		"theme": "dark",
		"flowchart": {
			"defaultRenderer": "elk"
		}
	}
}%%
flowchart
direction RL

a.cp[Control Plane]
a.w[Worker Node A]
b.w[Worker Node B]
c.w[Worker Node C]

i65.108.22.2[65.108.22.2]
i65.108.22.3[65.108.22.3]
i65.108.22.4[65.108.22.4]
i95.216.46.70[95.216.46.70]
i95.216.46.92[95.216.46.92]

subgraph Internet
65.108.23.65["65.108.23.65 (Hetzner Gateway)"]
65.108.22.1["65.108.22.1 (Hetzner Gateway)"]
95.216.46.65["95.216.46.65 (Hetzner Gateway)"]
end 

subgraph "Front-End Networks (r1-fe.routing.nic.dingo.services)"
65.108.23.70["65.108.23.70 (Primary srcNAT IP)"]
65.108.22.2
	65.108.22.3
	65.108.22.4
	95.216.46.70
	95.216.46.92
	subgraph "Routing Networks"
		subgraph "VRF-65.108.22.2 (VLAN2)"
			65.108.22.2 <--> 172.16.2.1
		end
		subgraph "VRF-65.108.22.3 (VLAN3)"
			65.108.22.3 <--> 172.16.3.1
		end
		subgraph "VRF-65.108.22.4 (VLAN4)"
			65.108.22.4 <--> 172.16.4.1
		end
		subgraph "VRF-95.216.46.70 (VLAN5)"
			95.216.46.70 <--> 172.16.5.1
		end
		subgraph "VRF-95.216.46.92 (VLAN6)"
			95.216.46.92 <--> 172.16.6.1
		end
		172.16.2.1 
		172.16.3.1 
		172.16.4.1 
		172.16.5.1 
		172.16.6.1 
	end
end

subgraph "Back-End Networks (r1-be.routing.nic.dingo.services)"
	10.0.0.254["10.0.0.254 (SAN Gateway)"]
	10.3.0.254["10.3.0.254 (Default Gateway)"]
	10.0.0.254 <--> 65.108.23.70
	10.3.0.254 <--> 65.108.23.70
	subgraph Kubernetes Network
		subgraph Core Kubernetes Network
			a.w <--> 10.3.0.254
			b.w <--> 10.3.0.254
			c.w <--> 10.3.0.254
			a.cp <--> 10.3.0.254
		end
		subgraph SAN Network
			a.w <--> 10.0.0.1
			b.w <--> 10.0.0.1
			c.w <--> 10.0.0.1
			10.0.0.1["10.0.0.1 (Network File Storage)"] <--> 10.0.0.254
		end
		subgraph Kubernetes Service Endpoints
			i65.108.22.2 <--> a.w
			i65.108.22.3 <--> a.w
			i65.108.22.4 <--> a.w
			i95.216.46.70 <--> a.w
			i95.216.46.92 <--> a.w
			i65.108.22.2 <--> b.w
			i65.108.22.3 <--> b.w
			i65.108.22.4 <--> b.w
			i95.216.46.70 <--> b.w
			i95.216.46.92 <--> b.w
			i65.108.22.2 <--> c.w
			i65.108.22.3 <--> c.w
			i65.108.22.4 <--> c.w
			i95.216.46.70 <--> c.w
			i95.216.46.92 <--> c.w
		end
	end


	subgraph "Service Networks"
	    172.16.2.2 
	    172.16.3.2 
	    172.16.4.2 
	    172.16.5.2 
	    172.16.6.2 
		172.16.2.2 <--> i65.108.22.2
		172.16.3.2 <--> i65.108.22.3
		172.16.4.2 <--> i65.108.22.4
		172.16.5.2 <--> i95.216.46.70
		172.16.6.2 <--> i95.216.46.92

	end
end

65.108.23.65 <--> 65.108.23.70
65.108.22.1 <--> 65.108.22.2
65.108.22.1 <--> 65.108.22.3
65.108.22.1 <--> 65.108.22.4
95.216.46.65 <--> 95.216.46.70
95.216.46.65 <--> 95.216.46.92

172.16.2.1 <-.-> 172.16.2.2 
172.16.3.1 <-.-> 172.16.3.2 
172.16.4.1 <-.-> 172.16.4.2 
172.16.5.1 <-.-> 172.16.5.2 
172.16.6.1 <-.-> 172.16.6.2
`

const encodedMermaidCode = btoa(mermaidCode)
const mermaidFetchFQDN = `https://mermaid.ink/svg/${encodedMermaidCode}`
const mermaidDiagram = await fetch(mermaidFetchFQDN).then((response) => {return response.text()} )
console.log(mermaidDiagram)

  return (
    <div className="container mx-auto">
      {/* <MermaidClient mermaidCode={mermaidCode} /> */}
	  <div dangerouslySetInnerHTML={{"__html": mermaidDiagram}} />
    </div>
  )
}
