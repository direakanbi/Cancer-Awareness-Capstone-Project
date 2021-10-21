document.addEventListener('DOMContentLoaded', () => {
  const speakerObj = [
    {
      name: 'David Katz',
      img: './images/david.jpg',
      job: 'Lifestyle medicine expert and founder of the True Health Initiative',
      desc: ' Dr. David Katz is devoted to health promotion and has been dubbed “the poet laureate”.',
    },
    {
      name: 'Diane Nathaniel',
      img: './images/diane.jpg',
      job: 'Founder of Beat Stage 3',
      desc: 'Speaker Diane Nathaniel is a stage 3 Colon Cancer survivor. Today, she’s busy spreading awareness of the importance of cancer screening and prevention. ',
    },
    {
      name: 'GEO',
      img: './images/geo.jpg',
      job: 'Comedian, author, and cancer survivor now talking about his life with and after cancer ',
      desc: 'Our keynote speaker Geo (born Christian Geo Heltboe) is a famous Danish comedian.  ',
    },
    {
      name: 'Dr. Jeremy Goldberg',
      img: './images/jeremy.jpg',
      job: 'Mentor, Author, Behavioral scientist, Happiness expert',
      desc: ' TEDx speaker Jeremy Goldberg is a Ph.D. scholar who spent five years studying the science of human behavior, specifically how attitudes affect action.',
    },
    {
      name: 'Sean Swarner',
      img: './images/sean-swarner.jpg',
      job: 'Two-time cancer survivor, the first cancer survivor to climb Mount Everest',
      desc: 'Keynote speaker Sean Swarner was the first cancer survivor to summit Mt. Everest. ',
    },
    {
      name: 'Lauren Miller',
      img: './images/lauren.jpg',
      job: 'Author, and stress relief coach inspiring groups and organizations to self-develop and reduce stress',
      desc: 'Keynote speaker Lauren E. Miller is an experienced stress relief/personal excellence educator, founder and managing partner of Grab & Go Stress Solutions. ',
    },
  ];
  const contSpeaker = document.createElement('div');
  contSpeaker.className = 'speakers-cont';

  const speakerSection = document.querySelector('.guest');
  speakerSection.appendChild(contSpeaker);
  for (let i = 0; i < speakerObj.length; i += 1) {
    const singleSpeakerCont = document.createElement('div');
    singleSpeakerCont.className = 'speaker-cont';
    const contImageSpeak = document.createElement('div');
    contImageSpeak.className = 'img-cont';
    const contSpeakerInfo = document.createElement('div');
    contSpeakerInfo.className = 'info-cont';
    const backImg = document.createElement('div');
    backImg.className = 'img-bck';
    const speakerImg = document.createElement('img');

    speakerImg.className = 'img-speaker';
    speakerImg.setAttribute('alt', `${speakerObj[i].name}`);
    speakerImg.setAttribute('src', `${speakerObj[i].img}`);
    const nameSpeaker = document.createElement('h1');
    nameSpeaker.className = 'name-speaker';
    nameSpeaker.textContent = `${speakerObj[i].name}`;
    const jobSpeaker = document.createElement('h5');
    jobSpeaker.className = 'job-speaker';
    jobSpeaker.textContent = `${speakerObj[i].job}`;
    const infoSpeaker = document.createElement('p');
    infoSpeaker.className = 'info-speaker';
    infoSpeaker.textContent = `${speakerObj[i].desc}`;

    const contSpeaker = document.querySelector('.speakers-cont');

    contSpeaker.appendChild(singleSpeakerCont);
    singleSpeakerCont.appendChild(contImageSpeak);
    singleSpeakerCont.appendChild(contSpeakerInfo);
    contImageSpeak.appendChild(backImg);
    contImageSpeak.appendChild(speakerImg);
    contSpeakerInfo.appendChild(nameSpeaker);
    contSpeakerInfo.appendChild(jobSpeaker);
    contSpeakerInfo.appendChild(infoSpeaker);
  }
});
