<script lang="ts">
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import Icon from 'svelte-awesome/components/Icon.svelte'

  async function getContributors() {
    const responses = [fetch('https://api.github.com/repos/GMLC-TDC/HELICS/contributors')]
    var contributors = []
    for (const response of responses) {
      contributors = contributors.concat(await (await response).json())
    }
    contributors = contributors.filter((contributor: any) => {
      if (contributor.login.includes('bot')) {
        return false
      }
      for (const member of members) {
        if (contributor.login === member.login) {
          return false
        }
      }
      return true
    })
    return contributors
  }
  const promise = getContributors()
  let members = [
    {
      name: 'Philip Top',
      affiliation: 'Lawrence Livermore National Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/20667153?v=4',
      login: 'phlptp',
    },
    {
      name: 'Jason Fuller',
      affiliation: 'Pacific Northwest National Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/4552618?v=4',
      login: 'jcfuller1',
    },
    {
      name: 'Trevor Hardy',
      affiliation: 'Pacific Northwest National Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/8697189?v=4',
      login: 'trevorhardy',
    },
    {
      name: 'Bryan Palmintier',
      affiliation: 'National Renewable Energy Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/249272?v=4',
      login: 'bpalmintier',
    },
    {
      name: 'Andy Fisher',
      affiliation: 'Pacific Northwest National Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/4552674?v=4',
      login: 'afisher1',
    },
    {
      name: 'Ryan Mast',
      affiliation: 'Lawrence Livermore National Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/3969255?v=4',
      login: 'nightlark',
    },
    {
      name: 'Dheepak Krishnamurthy',
      affiliation: 'National Renewable Energy Laboratory',
      profileUrl: 'https://avatars.githubusercontent.com/u/1813121?v=4',
      login: 'kdheepak',
    },
  ]
</script>

<article class="prose prose-lg max-w-none">
  <h2>Core Team</h2>
  {#each ['Pacific Northwest National Laboratory', 'Lawrence Livermore National Laboratory', 'National Renewable Energy Laboratory'] as affiliation}
    <h3>{affiliation}</h3>
    <div class="flex justify-start space-x-24">
      {#each members as member (member.name)}
        {#if member.affiliation === affiliation}
          <div class="text-center">
            <img
              src={member.profileUrl}
              class="rounded-full w-32 mb-4 mx-auto shadow-lg"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">{member.name}</h5>
            <a
              target="_blank"
              href="https://github.com/{member.login}"
              alt="github"
              class="text-gray-500"><Icon data={faGithub} /></a
            >
          </div>
        {/if}
      {/each}
    </div>
  {/each}

  {#await promise then contributors}
    <h2>Contributors</h2>
    <div class="flex flex-wrap justify-start space-x-2">
      {#each contributors as contributor (contributor.login)}
        <a target="_blank" href={contributor.html_url} alt="github" class="text-gray-500">
          <img
            src={contributor.avatar_url}
            class="rounded-full w-16 mb-4 mx-auto shadow-lg"
            alt="Avatar"
          />
        </a>
      {/each}
    </div>
  {/await}

  <h2>Statistics</h2>
  <h3>Badges</h3>
  <div class="flex space-x-4">
    <img
      alt="GitHub all releases"
      src="https://img.shields.io/github/downloads/GMLC-TDC/helics/total"
    />
    <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/GMLC-TDC/HELICS" />
    <img
      alt="GitHub closed issues"
      src="https://img.shields.io/github/issues-closed-raw/GMLC-TDC/HELICS"
    />
    <img
      alt="GitHub pull requests"
      src="https://img.shields.io/github/issues-pr-raw/GMLC-TDC/HELICS"
    />
    <img
      alt="GitHub closed pull requests"
      src="https://img.shields.io/github/issues-pr-closed-raw/GMLC-TDC/HELICS"
    />
    <img
      alt="GitHub contributors"
      src="https://img.shields.io/github/contributors-anon/GMLC-TDC/HELICS"
    />
  </div>
</article>
