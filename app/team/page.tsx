import { Linkedin, Github, Globe, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Equipe - Think & Code",
  description: "Decouvrez les membres de l'equipe Think & Code, passionnes de technologie et d'innovation au Senegal.",
}

interface TeamMember {
  name: string
  role: string
  bio: string
  skills: string[]
  image?: string
  linkedin?: string
  github?: string
  portfolio?: string
  education?: string[]
  experience?: string[]
}

const team: TeamMember[] = [
  {
    name: "Serigne Mbaye Sy AMAR",
    role: "Fondateur & CEO",
    bio: "Ingenieur diplome de Centrale Mediterranee et de l'Ecole Centrale Casablanca. Il allie expertise technique et competences manageriales pour diriger Think & Code. Fort d'experiences internationales (VINCI Energies, Skills and Smart, IDUS Capital), il porte une vision ambitieuse pour l'innovation technologique en Afrique.",
    skills: ["Leadership", "Python", "Laravel", "DevOps/CI-CD", "Gestion de Projet", "Scrum/Agile"],
    image: "/team/serigne-mbaye-sy-amar.jpg",
    linkedin: "https://www.linkedin.com/in/serigne-mbaye-sy-amar",
    education: [
      "Centrale Mediterranee — Ingenieur (2024-2025)",
      "Ecole Centrale Casablanca — Generaliste (2022-2024)",
      "IPSL Saint-Louis — Bachelor's degree (2020-2022)",
    ],
    experience: [
      "Ingenieur d'etudes — VINCI Energies, Lyon (2025)",
      "Project Manager & Web Dev — Skills and Smart (2024)",
      "Fondateur & CEO — Think & Code",
    ],
  },
  {
    name: "Mbaye NDIAYE",
    role: "Directeur Technique (CTO)",
    bio: "Ingenieur en Systemes d'Information et developpeur Full-Stack specialise Backend. Diplome d'un Master en Informatique a l'UCAD (FST), il evolue dans la fintech chez Pixpay en tant qu'integrateur d'API. Chez Think & Code, il pilote les choix techniques et garantit la qualite de chaque projet.",
    skills: ["Node.js", "Django", "Spring Boot", "REST API", "PostgreSQL", "React"],
    image: "/team/mbaye-ndiaye.jpg",
    linkedin: "https://www.linkedin.com/in/mbaye-ndiaye-85107a253/",
    github: "https://github.com/CodeNinja-lab",
    portfolio: "https://mon-port-folio-green.vercel.app/",
    education: [
      "Master en Informatique — UCAD, FST (2025)",
      "Licence en Genie Logiciel — UCAD, FST (2023)",
      "Baccalaureat — Lycee de Mbacke (2020)",
    ],
    experience: [
      "Integrateur API & Developpeur Full-Stack — Pixpay (Fintech)",
      "Directeur Technique (CTO) — Think & Code",
    ],
  },
  {
    name: "Ndieye DIOP",
    role: "Responsable Formations",
    bio: "Pedagogique et passionnee, elle concoit les programmes de formation pour rendre le code accessible a tous.",
    skills: ["Pedagogie", "Python", "Data Science"],
  },
  {
    name: "Mame Goumba AMAR",
    role: "Developpeur Backend Senior",
    bio: "Specialiste des architectures robustes et des APIs performantes, il est un pilier technique des projets Think & Code.",
    skills: ["Spring Boot", "Node.js", "PostgreSQL"],
    image: "/team/mame-goumba-amar.jpg",
  },
  {
    name: "Ndeye Maguette KA",
    role: "Designeuse UI/UX",
    bio: "Creative et orientee utilisateur, elle donne vie aux interfaces de tous les projets avec un sens aigu du detail.",
    skills: ["Figma", "UI Design", "User Research"],
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A3C6E] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            {"L'Equipe"}
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-white md:text-5xl text-balance">
            Les visages derriere Think & Code
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            {"Une equipe passionnee, diverse et engagee pour l'innovation technologique au Senegal."}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 transition-all hover:border-[#F4A620]/50 hover:shadow-lg"
              >
                {/* Avatar: image ou initiales */}
                {member.image ? (
                  <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full ring-2 ring-[#F4A620]/30">
                    <Image
                      src={member.image}
                      alt={`Photo de ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#1A3C6E] text-xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                )}

                <h3 className="mb-1 font-mono text-lg font-bold text-[#1A3C6E]">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-[#F4A620]">{member.role}</p>
                <p className="mb-4 text-sm leading-relaxed text-[#666666]">{member.bio}</p>

                {/* Formation */}
                {member.education && (
                  <div className="mb-4">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3C6E]">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Formation
                    </div>
                    <ul className="space-y-1">
                      {member.education.map((edu) => (
                        <li key={edu} className="text-xs leading-relaxed text-[#666666]">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Experience */}
                {member.experience && (
                  <div className="mb-4">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3C6E]">
                      <Briefcase className="h-3.5 w-3.5" />
                      Experience
                    </div>
                    <ul className="space-y-1">
                      {member.experience.map((exp) => (
                        <li key={exp} className="text-xs leading-relaxed text-[#666666]">
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                <div className="mt-auto mb-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#F5F7FA] px-3 py-1 text-xs font-medium text-[#1A3C6E]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`} className="text-[#999999] transition-colors hover:text-[#0A66C2]">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  ) : (
                    <a href="#" aria-label={`LinkedIn de ${member.name}`} className="text-[#999999] transition-colors hover:text-[#1A3C6E]">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.github ? (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${member.name}`} className="text-[#999999] transition-colors hover:text-[#333]">
                      <Github className="h-4 w-4" />
                    </a>
                  ) : (
                    <a href="#" aria-label={`GitHub de ${member.name}`} className="text-[#999999] transition-colors hover:text-[#1A3C6E]">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" aria-label={`Portfolio de ${member.name}`} className="text-[#999999] transition-colors hover:text-[#F4A620]">
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold text-[#1A3C6E]">{"Rejoignez l'equipe"}</h2>
          <p className="mb-8 text-[#666666]">
            {"Vous etes passionne par la technologie et souhaitez avoir un impact reel ? Think & Code recherche toujours des talents motives."}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F4A620] px-6 py-3 font-semibold text-[#1A3C6E] transition-colors hover:bg-[#F4A620]/90"
          >
            Postuler maintenant
          </a>
        </div>
      </section>
    </>
  )
}
