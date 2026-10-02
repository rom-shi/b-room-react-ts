import { BookModel } from '../../models/book';
import bookCover1 from '../../assets/books/narnia.webp';
import bookCover2 from '../../assets/books/psychlogy.webp';
import bookCover3 from '../../assets/books/doriangray.webp';
import bookCover4 from '../../assets/books/subtleart.webp';
import bookCover5 from '../../assets/books/twotowers.webp';
import bookCover6 from '../../assets/books/farytails.webp';
import bookCover7 from '../../assets/books/worrying.webp';
import bookCover8 from '../../assets/books/sweet.webp';
import bookCover9 from '../../assets/books/things.webp';
import bookCover10 from '../../assets/books/milk.webp';
import bookCover11 from '../../assets/books/mobydick.webp';
import bookCover12 from '../../assets/books/crying.webp';
import bookCover13 from '../../assets/books/in-search.webp';
import bookCover14 from '../../assets/books/ulysses.webp';
import bookCover15 from '../../assets/books/don-quixote.webp';
import bookCover16 from '../../assets/books/one-hundred-years.webp';
import bookCover17 from '../../assets/books/the-great-gatsby.webp';
import bookCover18 from '../../assets/books/hamlet.webp';
import bookCover19 from '../../assets/books/the-brothers-karamazov.webp';
import bookCover20 from '../../assets/books/wuthering-heights.webp';
import bookCover21 from '../../assets/books/the-catcher-in-the-rye.webp';
import bookCover22 from '../../assets/books/pride-and-prejudice.webp';
import bookCover23 from '../../assets/books/huckleberry-finn.webp';
import bookCover24 from '../../assets/books/anna-karenina.webp';
import bookCover25 from '../../assets/books/alices.webp';
import bookCover26 from '../../assets/books/the-iliad.webp';
import bookCover27 from '../../assets/books/to-the-lighthouse.webp';
import bookCover28 from '../../assets/books/catch-22.webp';
import bookCover29 from '../../assets/books/heart-darkness.webp';
import bookCover30 from '../../assets/books/the-sound-and-the-fury.webp';
import bookCover31 from '../../assets/books/1984.webp';
import bookCover32 from '../../assets/books/great-expectations.webp';
import bookCover33 from '../../assets/books/1001.webp';
import bookCover34 from '../../assets/books/the-grapes-of-wrath.webp';

const testBooks: BookModel[] = [
  {
    bookId: '936028fe-fd10-4805-8c7d-552393f0e949',
    photo: bookCover1,
    author: 'C. S. Lewis',
    title: 'The Chronicles of Narnia',
    description: `
      The Chronicles of Narnia is a series of seven high fantasy novels by British author 
      C. S. Lewis. Illustrated by Pauline Baynes and originally published between 1950 and 1956, 
      The Chronicles of Narnia has been adapted for radio, television, the stage, film and video games. 
      The series is set in the fictional realm of Narnia, a fantasy world of magic, 
      mythical beasts and talking animals. It narrates the adventures of various children who 
      play central roles in the unfolding history of the Narnian world. Except in The Horse 
      and His Boy, the protagonists are all children from the real world who are magically 
      transported to Narnia, where they are sometimes called upon by the lion Aslan to protect 
      Narnia from evil. The books span the entire history of Narnia, from its creation in The 
      Magician's Nephew to its eventual destruction in The Last Battle.
      <br/><br/>
      The Chronicles of Narnia is considered a classic of children's literature and is Lewis's 
      best-selling work, having sold over 100 million copies in 47 languages.`,
    rating: 4.3,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1499,
    paperPrice: 0.1299,
    news: false,
    bestsaller: true,
    date: '16-10-1950',
    genre: ['11188901-3bca-4399-8f4e-776dcce36e58', '7692ec4e-1e11-45a5-8de8-51cf4110cac0'],
  },
  {
    bookId: '033e7cd6-1dce-4b9c-b370-bfc35086680b',
    photo: bookCover2,
    author: 'Morgan Housel',
    title: 'The Psychology of Money',
    description: `
      Doing well with money isn't necessarily about what you know. 
      It's about how you behave. And behavior is hard to teach, 
      even to really smart people. Money--investing, personal finance, 
      and business decisions--is typically taught as a math-based field, 
      where data and formulas tell us exactly what to do. But in the 
      real world people don't make financial decisions on a spreadsheet. 
      They make them at the dinner table, or in a meeting room, where 
      personal history, your own unique view of the world, ego, pride, 
      marketing, and odd incentives are scrambled together. 
      In The Psychology of Money, award-winning author Morgan Housel 
      shares 19 short stories exploring the strange ways people think 
      about money and teaches you how to make better sense of one of 
      life's most important topics.`,
    rating: 4.7,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.15,
    paperPrice: 0.13,
    news: true,
    bestsaller: true,
    date: '13-09-2022',
    genre: ['5f5e4d72-3db7-45be-81bc-1c6c547d979b'],
  },
  {
    bookId: 'd557be17-16a0-4d15-9204-0490b8bafd05',
    photo: bookCover3,
    author: 'Oscar Wilde',
    title: 'The Picture of Dorian Gray',
    description: `
      The Picture of Dorian Gray is a philosophical novel by Irish writer 
      Oscar Wilde. A shorter novella-length version was published in the 
      July 1890 issue of the American periodical Lippincott's Monthly Magazine.
      The novel-length version was published in April 1891.
      <br/><br/>
      The story revolves around a portrait of Dorian Gray painted by Basil Hallward,
      a friend of Dorian's and an artist infatuated with Dorian's beauty. 
      Through Basil, Dorian meets Lord Henry Wotton and is soon enthralled 
      by the aristocrat's hedonistic worldview: that beauty and sensual 
      fulfillment are the only things worth pursuing in life. 
      Newly understanding that his beauty will fade, Dorian expresses the 
      desire to sell his soul, to ensure that the picture, rather than he, 
      will age and fade. The wish is granted, and Dorian pursues a libertine 
      life of varied amoral experiences while staying young and beautiful; 
      all the while, his portrait ages and visually records every one of 
      Dorian's sins.
      <br/><br/>
      Wilde's only novel, it was subject to much controversy and 
      criticism in its time but has come to be recognized as a classic of 
      gothic literature.`,
    rating: 4.1,
    ratingCount: 10,
    available: true,
    hardcover: false,
    paperback: true,
    hardPrice: 0.2,
    paperPrice: 0.18,
    news: true,
    bestsaller: false,
    date: '1-07-1890',
    genre: ['1c92e751-0a7c-44c6-a2a3-e0652e3f9108', '80c5f163-21f3-427b-bfda-89cd6ccd4967'],
  },
  {
    bookId: '3bbd5dbd-fa30-4c27-a2a5-64a99fccf348',
    photo: bookCover4,
    author: 'Mark Manson',
    title: 'The Subtle Art of Not Giving a F*ck',
    description: `
      The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to 
      Living a Good Life is a 2016 nonfiction self-help book by American 
      blogger and author Mark Manson. The book covers Manson's belief 
      that life's struggles give it meaning and argues that typical s
      elf-help books offer meaningless positivity which is neither practical 
      nor helpful, thus improperly approaching the problems many individuals 
      face. It was a New York Times and Globe and Mail bestseller.`,
    rating: 3.9,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.2399,
    paperPrice: 0.2199,
    news: false,
    bestsaller: false,
    date: '13-09-2016',
    genre: ['51e262ac-7619-4272-8970-d96f33692da4'],
  },
  {
    bookId: '94fd3c71-d481-430e-a8b3-155a15a88efd',
    photo: bookCover5,
    author: 'J. R. R. Tolkien',
    title: 'The Two towers',
    description: `
      The Lord of the Rings is composed of six "books", aside from an 
      introduction, a prologue and six appendices. However, the novel 
      was originally published as three separate volumes, due to 
      post-World War II paper shortages and size and price considerations.
      The Two Towers covers Books Three and Four.
      <br/><br/>
      Tolkien wrote: "The Two Towers gets as near as possible to 
      finding a title to cover the widely divergent Books Three and Four; 
      and can be left ambiguous." At this stage he planned to title 
      the individual books. The proposed title for Book Three was The 
      Treason of Isengard. Book Four was titled The Journey of the 
      Ringbearers or The Ring Goes East. The titles The Treason of 
      Isengard and The Ring Goes East were used in the Millennium edition. 
      In other editions the Books are often untitled.
      <br/><br/>
      In letters to Rayner Unwin, Tolkien considered naming the two 
      as Orthanc and Barad-dûr, Minas Tirith and Barad-dûr, or Orthanc 
      and the Tower of Cirith Ungol. However, a month later, he 
      wrote a note published at the end of The Fellowship of the Ring, 
      and later drew a cover illustration, both of which identified the 
      pair as Minas Morgul and Orthanc. In the illustration, Orthanc 
      is shown as a black tower, three-horned, with the sign of the White 
      Hand beside it; Minas Morgul is a white tower, with a thin waning 
      moon above it, in reference to its original name, Minas Ithil, the 
      Tower of the Rising Moon. Between the two towers a Nazgûl flies.`,
    rating: 4.5,
    ratingCount: 10,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.33,
    paperPrice: 0.31,
    news: true,
    bestsaller: true,
    date: '05-12-2002',
    genre: ['11188901-3bca-4399-8f4e-776dcce36e58'],
  },
  {
    bookId: 'f470b1b6-f33d-43f2-bcb4-a3fb60dd5d44',
    photo: bookCover6,
    author: 'Angela Carter',
    title: 'Book of Fairy Tales',
    description: `
      Once upon a time fairy tales weren't meant just for children, and neither is Angela Carter's Book 
      of Fairy Tales. This collection contains lyrical tales, bloody tales and hilariously funny 
      and ripely bawdy stories from countries all around the world - from the Arctic to Asia - and 
      no dippy princesses or soppy fairies. Instead, we have pretty maids and old crones; crafty 
      women and bad girls; enchantresses and midwives; rascal aunts and odd sisters.`,
    rating: 4.1,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.32,
    paperPrice: 0.3,
    news: false,
    bestsaller: false,
    date: '03-11-2005',
    genre: ['f3eca9f4-514f-4070-bd70-eb82254b8f60', 'f553e028-0e28-4b99-812f-69e8f78cbe8d', '36f1e803-5626-43b8-b5a8-c20ad111d49c'],
  },
  {
    bookId: '00bcae7a-ec0e-469c-a8d6-12397e7f7f33',
    photo: bookCover7,
    author: 'Dale Carnegie',
    title: 'How to stop worrying and start',
    description: `
      How to Stop Worrying and Start Living is a self-help book by Dale Carnegie. 
      It was first printed in Great Britain in 1948 by Richard Clay (The Chaucer Press), 
      Ltd., Bungay Suffolk (S.B.N. 437 95083 2). It is currently published as a Mass 
      Market Paperback of 352 pages by Pocket (Revised edition: September 15, 1990), ISBN 0-671-73335-4.
      <br/><br/>
      Carnegie says in the preface to How to Stop Worrying and Start Living that he wrote 
      it because he "was one of the unhappiest lads in New York". He said that he made 
      himself sick with worry because he hated his position in life, which he credits for 
      wanting to figure out how to stop worrying.
      <br/><br/>
      The book's goal is to lead the reader to a more enjoyable and fulfilling life, 
      helping them to become more aware of, not only themselves, but others around them. 
      Carnegie tries to address the everyday nuances of living, in order to get the reader 
      to focus on the more important aspects of life. It is now a world-famous, self-help 
      book amongst many people.`,
    rating: 4.2,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.3785,
    paperPrice: 0.3585,
    news: false,
    bestsaller: false,
    date: '16-10-1948',
    genre: ['51e262ac-7619-4272-8970-d96f33692da4'],
  },
  {
    bookId: 'a1611493-5c06-40c7-8a07-72789551a431',
    photo: bookCover8,
    author: 'Richard Carlson',
    title: 'Don`t sweat the Small Stuf',
    description: `
      Don't Sweat the Small Stuff... and it's all small stuff is a book that shows you how 
      to keep from letting the little things in life drive you crazy. In thoughtful and insightful 
      language, author Richard Carlson reveals ways to calm down in the midst of your incredibly 
      hurried, stress-filled life. You can learn to put things in perspective by making the 
      small daily changes he suggests,including advice such as "Think of your problems as potential 
      teachers"; "Remember that when you die, your 'In' box won't be empty"; and "Do one thing 
      at a time." You should also try to live in the present moment, let others have the glory 
      at times, and lower your tolerance to stress. You can write down your most stubborn positions 
      and see if you can soften them, learn to trust your intuitions, and live each day as if 
      it might be your last. With gentle, supportive suggestions, Dr.Carlson reveals ways to 
      make your actions more peaceful and caring, with the added benefit of making your life more 
      calm and stress-free.`,
    rating: 4,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.4,
    paperPrice: 0.38,
    news: false,
    bestsaller: false,
    date: '16-01-1997',
    genre: ['51e262ac-7619-4272-8970-d96f33692da4'],
  },
  {
    bookId: 'a430cb19-660d-4f2e-8fba-41875c0fa62b',
    photo: bookCover9,
    author: 'Marianne Flitz',
    title: 'The weight of Things',
    description: `
      The Weight of Things is the first book, and the first translated book, and possibly 
      the only translatable book by Austrian writer Marianne Fritz (1948–2007). 
      For after winning acclaim with this novel—awarded the Robert Walser Prize in 1978—she 
      embarked on a 10,000-page literary project called “The Fortress,” creating over 
      her lifetime elaborate colorful diagrams and typescripts so complicated that her 
      publisher had to print them straight from her original documents. A project as brilliant 
      as it is ambitious and as bizarre as it is brilliant, it earned her cult status, 
      comparisons to James Joyce no less than Henry Darger, and admirers including Elfriede 
      Jelinek and W. G. Sebald.`,
    rating: 3.9,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.415,
    paperPrice: 0.395,
    news: false,
    bestsaller: false,
    date: '01-10-2015',
    genre: ['f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: 'bf14eb1c-c7c8-4e08-81c3-886b2a45e308',
    photo: bookCover10,
    author: 'Rupi Kaur',
    title: 'Milk and honey',
    description: `"Milk and honey" - The New Requblic
      <br/><br/>
      #1 New York Times bestsaller milk and honey is a collection of poetry
      and prose about surival. About the experience of volience, abuse, love, loss
      and femininity.
      <br/><br/>
      The book is divided into four chapters, and each chapter server a different
      purpose. Deals with a different pain. Heals a different heartache. milk
      and honey takes readers throгпр a journey of the most bitter moments in life
      and finds sweetness in them becouse there is sweetness everywhere
      if you are just willing to look.`,
    rating: 4.4,
    ratingCount: 10,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.5599,
    paperPrice: 0.5399,
    news: false,
    bestsaller: true,
    date: '04-11-2014',
    genre: ['8136cbfc-8256-4baa-b814-e4bda5c97098'],
  },
  {
    bookId: '572aa4f6-7bb5-4af4-b291-358f3bbb6924',
    photo: bookCover11,
    author: 'Herman Melville',
    title: 'Moby Dick',
    description: `First published in 1851, Melville's 
      masterpiece is, in Elizabeth Hardwick's words, "the greatest novel in 
      American literature." The saga of Captain Ahab and his monomaniacal 
      pursuit of the white whale remains a peerless adventure story but one full 
      of mythic grandeur, poetic majesty, and symbolic power. Filtered through the 
      consciousness of the novel's narrator, Ishmael, Moby-Dick draws us into a 
      universe full of fascinating characters and stories, from the noble cannibal 
      Queequeg to the natural history of whales, while reaching existential 
      depths that excite debate and contemplation to this day.`,
    rating: 3.5,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.6,
    paperPrice: 0.58,
    news: false,
    bestsaller: false,
    date: '18-10-1851',
    genre: ['409e9b83-151e-4596-8fc5-029447a3e164', '7692ec4e-1e11-45a5-8de8-51cf4110cac0'],
  },
  {
    bookId: '5f2dbf9e-1be1-4c7b-b866-50bbd161c9e4',
    photo: bookCover12,
    author: 'Heather Christle',
    title: 'The Crying book',
    description: `
      Award-winning poet Heather Christle has just lost a dear friend to suicide and must 
      reckon with her own struggles with depression and the birth of her first child. 
      How she faces her joy, grief, anxiety, impending motherhood, and conflicted truce with 
      the world results in a moving meditation on the nature, rapture, and perils of crying―from 
      the history of tear-catching gadgets (including the woman who designed a gun that shoots tears) 
      to the science behind animal tears (including moths who drink them) to the fraught role 
      of white women's tears in racist violence.
      <br/><br/>
      Told in short, poetic snippets, The Crying Book delights and surprises, as well as 
      rigorously examines how mental illness can affect a family across generations and 
      how crying can express women’s agency―or lack of agency―in everyday life. Christle’s 
      gift is the freshness of her voice and honesty of her approach, both of which create 
      an intimacy with readers as she explores a human behavior broadly experienced but rarely 
      questioned. A beautiful tribute to the power of crying, and to working through despair to tears of joy.`,
    rating: 3.8,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.7,
    paperPrice: 0.68,
    news: false,
    bestsaller: false,
    date: '05-11-2019',
    genre: ['8136cbfc-8256-4baa-b814-e4bda5c97098', 'e67741e4-3c9e-4cbf-a992-9d1bd2dd40e8'],
  },
  {
    bookId: '899453d4-ad15-4dfe-8a2b-3a1ae953cde6',
    photo: bookCover13,
    author: 'Marcel Proust',
    title: 'In Search of Lost Time',
    description: `Swann's Way, the first part of A la recherche de 
      temps perdu, Marcel Proust's seven-part cycle, was published in 
      1913. In it, Proust introduces the themes that run through the 
      entire work. The narrator recalls his childhood, aided by the 
      famous madeleine; and describes M. Swann's passion for Odette. 
      The work is incomparable. Edmund Wilson said "[Proust] has 
      supplied for the first time in literature an equivalent in the 
      full scale for the new theory of modern physics.`,
    rating: 4.4,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1887,
    paperPrice: 0.1687,
    news: true,
    bestsaller: false,
    date: '16-10-1913',
    genre: ['c2eeb8f6-d914-4450-945a-7703ff9bc614', '80c5f163-21f3-427b-bfda-89cd6ccd4967'],
  },
  {
    bookId: 'd788449e-d47a-4859-aba5-ec5cf13f3e13',
    photo: bookCover14,
    author: 'James Joyce',
    title: 'Ulysses',
    description: `Ulysses chronicles the passage of Leopold Bloom 
      through Dublin during an ordinary day, June 16, 1904. The title 
      parallels and alludes to Odysseus (Latinised into Ulysses), 
      the hero of Homer's Odyssey (e.g., the correspondences between 
      Leopold Bloom and Odysseus, Molly Bloom and Penelope, and 
      Stephen Dedalus and Telemachus). Joyce fans worldwide now 
      celebrate June 16 as Bloomsday.`,
    rating: 3.8,
    ratingCount: 10,
    available: true,
    hardcover: false,
    paperback: true,
    hardPrice: 0.0959,
    paperPrice: 0.0759,
    news: true,
    bestsaller: true,
    date: '22-12-1920',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: '305aa776-46a0-4d69-8d51-f461611da72e',
    photo: bookCover15,
    author: 'Miguel de Cervantes',
    title: 'Don Quixote',
    description: `Alonso Quixano, a retired country gentleman in his fifties, 
      lives in an unnamed section of La Mancha with his niece and a housekeeper. 
      He has become obsessed with books of chivalry, and believes their every 
      word to be true, despite the fact that many of the events in them are 
      clearly impossible. Quixano eventually appears to other people to have 
      lost his mind from little sleep and food and because of so much reading.`,
    rating: 3.9,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.7,
    paperPrice: 0.68,
    news: false,
    bestsaller: false,
    date: '16-01-1605',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'f7f76a58-02b1-48f4-bbbe-dedd1a47b850', 'e87af96f-96a7-4597-873e-2e93a743e931'],
  },
  {
    bookId: '5ca2ad07-9a8e-4e71-8502-6abf48f965df',
    photo: bookCover16,
    author: 'Gabriel Garcia Marquez',
    title: 'One Hundred Years of Solitude',
    description: `One of the 20th century's enduring works, 
      One Hundred Years of Solitude is a widely beloved and acclaimed 
      novel known throughout the world, and the ultimate achievement 
      in a Nobel Prize–winning career. The novel tells the story of the 
      rise and fall of the mythical town of Macondo through the history
      of the Buendía family. It is a rich and brilliant chronicle of life 
      and death, and the tragicomedy of humankind. In the noble, ridiculous, 
      beautiful, and tawdry story of the Buendía family, one sees all of 
      humanity, just as in the history, myths, growth, and decay of Macondo, 
      one sees all of Latin America. Love and lust, war and revolution, riches 
      and poverty, youth and senility — the variety of life, the endlessness of death, 
      the search for peace and truth — these universal themes dominate the novel. 
      Whether he is describing an affair of passion or the voracity of capitalism 
      and the corruption of government, Gabriel García Márquez always writes with 
      the simplicity, ease, andpurity that are the mark of a master. Alternately 
      reverential and comical, One Hundred Years of Solitude weaves the political, 
      personal, and spiritual to bring a new consciousness to storytelling. 
      Translated into dozens of languages, this stunning work is no less than 
      an accounting of the history of the human race.`,
    rating: 4.1,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.3862,
    paperPrice: 0.3662,
    news: false,
    bestsaller: true,
    date: '10-05-1967',
    genre: ['8136cbfc-8256-4baa-b814-e4bda5c97098', '11188901-3bca-4399-8f4e-776dcce36e58', 'f553e028-0e28-4b99-812f-69e8f78cbe8d', 'd9cfab3c-c834-42f7-81c0-aedccbabc02b'],
  },
  {
    bookId: 'c65a886d-0df3-4c4b-a554-e4f29d9ef834',
    photo: bookCover17,
    author: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    description: `The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". 
      Following the shock and chaos of World War I, American society enjoyed unprecedented 
      levels of prosperity during the "roaring" 1920s as the economy soared. 
      At the same time, Prohibition, the ban on the sale and manufacture of alcohol as
      mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to 
      an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, 
      like Nick Carraway in his novel, idolized the riches and glamor of the age, he was 
      uncomfortable with the unrestrained materialism and the lack of morality that went with 
      it, a kind of decadence.`,
    rating: 3.9,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1499,
    paperPrice: 0.0499,
    news: false,
    bestsaller: true,
    date: '10-04-1925',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'f553e028-0e28-4b99-812f-69e8f78cbe8d', 'd3a50a2e-877e-4ddc-bc8d-1180eb8a77f3'],
  },
  {
    bookId: '3fe29e71-efe1-4377-8fef-7d5c1592778f',
    photo: bookCover18,
    author: 'William Shakespeare',
    title: 'Hamlet',
    description: `The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, 
      is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. 
      The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, 
      who has murdered Hamlet's father, the King, and then taken the throne and married Gertrude, 
      Hamlet's mother. The play vividly charts the course of real and feigned madness—from 
      overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, 
      and moral corruption.`,
    rating: 4.2,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1199,
    paperPrice: 0.0257,
    news: false,
    bestsaller: true,
    date: '08-06-1600',
    genre: ['d3a50a2e-877e-4ddc-bc8d-1180eb8a77f3'],
  },
  {
    bookId: '0c8bcfc2-3c77-4b41-895e-79a0f0069b4c',
    photo: bookCover19,
    author: 'Fyodor Dostoyevsky',
    title: 'The Brothers Karamazov',
    description: `Dostoevsky's last and greatest novel, The Karamazov Brothers, is both a 
      brilliantly told crime story and a passionate philosophical debate. The dissolute 
      landowner Fyodor Pavlovich Karamazov is murdered; his sons — the atheist intellectual Ivan, 
      the hot-blooded Dmitry, and the saintly novice Alyosha — are all at some level involved. 
      Bound up with this intense family drama is Dostoevsky's exploration of many deeply felt 
      ideas about the existence of God, the question of human freedom, the collective nature of guilt, 
      the disastrous consequences of rationalism. The novel is also richly comic: the Russian 
      Orthodox Church, the legal system, and even the author's most cherished causes and beliefs 
      are presented with a note of irreverence, so that orthodoxy and radicalism, sanity and madness, 
      love and hatred, right and wrong are no longer mutually exclusive. Rebecca West considered 
      it "the allegory for the world's maturity, but with children to the fore." 
      This new translation does full justice to Dostoevsky's genius, particularly in the use of 
      the spoken word, which ranges over every mode of human expression.`,
    rating: 4.4,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0428,
    paperPrice: 0.0263,
    news: true,
    bestsaller: false,
    date: '16-11-1880',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'e74ca3cb-e5ef-4609-aff2-b9e0a9971144'],
  },
  {
    bookId: 'c363d42a-dc04-4900-a1e3-503008be0ab9',
    photo: bookCover20,
    author: 'Emily Brontë',
    title: 'Wuthering Heights',
    description: `The narrative is non-linear, involving several flashbacks, 
      and two primary narrators: Mr. Lockwood and Ellen "Nelly" Dean. 
      The novel opens in 1801, with Mr. Lockwood arriving at Thrushcross Grange, 
      a grand house on the Yorkshire moors that he is renting from the surly Heathcliff, 
      who lives at nearby Wuthering Heights. Lockwood is treated rudely, and coldly 
      by the brooding, unsociable Heathcliff, and is forced to stay at Wuthering Heights 
      for a night because one of the savage dogs of the Heights attacks him, and the 
      weather turns against him. The housekeeper cautiously takes him to a chamber to 
      sleep through the night and warns him to not speak to Heathcliff about where he is 
      sleeping, for he would get in deep trouble.`,
    rating: 3.9,
    ratingCount: 10,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.2388,
    paperPrice: 0.1825,
    news: false,
    bestsaller: false,
    date: '18-12-1847',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', '1c92e751-0a7c-44c6-a2a3-e0652e3f9108', '80c5f163-21f3-427b-bfda-89cd6ccd4967', 'd3a50a2e-877e-4ddc-bc8d-1180eb8a77f3'],
  },
  {
    bookId: '9d1b6100-dda5-4705-b09a-2f5e15b10824',
    photo: bookCover21,
    author: 'J. D. Salinger',
    title: 'The Catcher in the Rye',
    description: `The Catcher in the Rye is a 1945 novel by J. D. Salinger. 
      Originally published for adults, the novel has become a common part of 
      high school and college curricula throughout the English-speaking world; 
      it has also been translated into almost all of the world's major languages. 
      Around 250,000 copies are sold each year, with total sales of more than sixty-five million. 
      The novel's antihero, Holden Caulfield, has become an icon for teenage rebellion.`,
    rating: 3.8,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.4698,
    paperPrice: 0.0698,
    news: false,
    bestsaller: false,
    date: '16-07-1951',
    genre: ['d3a50a2e-877e-4ddc-bc8d-1180eb8a77f3', 'f3eca9f4-514f-4070-bd70-eb82254b8f60'],
  },
  {
    bookId: 'd7fa5e7a-45bc-48ac-99f3-99d9ea7f8126',
    photo: bookCover22,
    author: 'Jane Austen',
    title: 'Pride and Prejudice',
    description: `The book is narrated in free indirect speech following the main character 
      Elizabeth Bennet as she deals with matters of upbringing, marriage, moral rightness and education 
      in her aristocratic society. Though the book's setting is uniquely turn of the 19th century, 
      it remains a fascination of modern readership, continuing to remain at the top of lists titled 
      "most loved books of all time", and receiving considerable attention from literary critics. 
      This modern interest has resulted in a number of dramatic adaptations and a plethora of books 
      developing Austen's memorable characters further.`,
    rating: 4.3,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0968,
    paperPrice: 0.0350,
    news: false,
    bestsaller: false,
    date: '28-01-1813',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: '2616c503-e4ef-4f01-882c-766ad8efbef0',
    photo: bookCover23,
    author: 'Mark Twain',
    title: 'The Adventures of Huckleberry Finn',
    description: `Revered by all of the town's children and dreaded by all of its mothers, 
      Huckleberry Finn is indisputably the most appealing child-hero in American literature. 
      Unlike the tall-tale, idyllic world of Tom Sawyer, The Adventures of Huckleberry Finn 
      is firmly grounded in early reality. From the abusive drunkard who serves as Huckleberry's 
      father, to Huck's first tentative grappling with issues of personal liberty and the unknown, 
      Huckleberry Finn endeavors to delve quite a bit deeper into the complexities — both joyful and tragic of life.`,
    rating: 3.8,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0764,
    paperPrice: 0.0864,
    news: false,
    bestsaller: false,
    date: '10-12-1884',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'f7f76a58-02b1-48f4-bbbe-dedd1a47b850', '6be329e0-bca8-4009-97da-7047cfe23e7b', 'f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: 'e0ab6eb5-b9e7-4f76-8fa9-7407fa572e71',
    photo: bookCover24,
    author: 'Leo Tolstoy',
    title: 'Anna Karenina',
    description: `Anna Karenina tells of the doomed love affair between the sensuous and 
      rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects 
      her passionless marriage and must endure the hypocrisies of society. Set against a 
      vast and richly textured canvas of nineteenth-century Russia, the novel's seven major 
      characters create a dynamic imbalance, playing out the contrasts of city and country 
      life and all the variations on love and family happiness. While previous versions have 
      softened the robust, and sometimes shocking, quality of Tolstoy's writing, Pevear and 
      Volokhonsky have produced a translation true to his powerful voice. This award-winning 
      team's authoritative edition also includes an illuminating introduction and explanatory notes. 
      Beautiful, vigorous, and eminently readable, this Anna Karenina will be the definitive 
      text for generations to come.`,
    rating: 4.7,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1191,
    paperPrice: 0.2300,
    news: false,
    bestsaller: false,
    date: '18-08-1877',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'f553e028-0e28-4b99-812f-69e8f78cbe8d', 'd9cfab3c-c834-42f7-81c0-aedccbabc02b'],
  },
  {
    bookId: '58b9a6bb-f59e-45be-9e61-379157d54487',
    photo: bookCover25,
    author: 'Lewis Carroll',
    title: 'Alice\'s Adventures in Wonderland',
    description: `In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, 
      created a story about a little girl tumbling down a rabbit hole. Thus began the immortal 
      adventures of Alice, perhaps the most popular heroine in English literature. Countless 
      scholars have tried to define the charm of the Alice books–with those wonderfully eccentric 
      characters the Queen of Hearts, Tweedledum, and Tweedledee, the Cheshire Cat, Mock Turtle, 
      the Mad Hatter et al.–by proclaiming that they really comprise a satire on language, 
      a political allegory, a parody of Victorian children’s literature, even a reflection of 
      contemporary ecclesiastical history. Perhaps, as Dodgson might have said, Alice is no more 
      than a dream, a fairy tale about the trials and tribulations of growing up–or down, or 
      all turned round–as seen through the expert eyes of a child.`,
    rating: 4.3,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0331,
    paperPrice: 0.0959,
    news: false,
    bestsaller: false,
    date: '14-03-1865',
    genre: ['f3eca9f4-514f-4070-bd70-eb82254b8f60', '11188901-3bca-4399-8f4e-776dcce36e58', 'f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: 'b76f5ad3-2aa0-4d54-a006-b92232f3120a',
    photo: bookCover26,
    author: 'Homer',
    title: 'The Iliad',
    description: `The Iliad is an epic poem in dactylic hexameters, traditionally 
      attributed to Homer. Set in the Trojan War, the ten-year siege of Ilium by a 
      coalition of Greek states, it tells of the battles and events during the weeks
      of a quarrel between King Agamemnon and the warrior Achilles. Although the 
      story covers only a few weeks in the final year of the war, the Iliad mentions 
      or alludes to many of the Greek legends about the siege. Along with the Odyssey, 
      also attributed to Homer, the Iliad is among the oldest extant works of Western 
      literature, and its written version is usually dated to around the eighth century 
      BC. The Iliad contains approximately 15,700 lines, and is written in a literary 
      amalgam of several Greek dialects. The authorship of the poem is disputed.`,
    rating: 3.9,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.3168,
    paperPrice: 0.7000,
    news: false,
    bestsaller: false,
    date: '01-01-0000',
    genre: ['409e9b83-151e-4596-8fc5-029447a3e164', '8136cbfc-8256-4baa-b814-e4bda5c97098'],
  },
  {
    bookId: '8f7043eb-ea34-4716-88b1-dae223a69e45',
    photo: bookCover27,
    author: 'Virginia Woolf',
    title: 'To the Lighthouse',
    description: `A landmark novel of high modernism, the text, centering on the Ramsay 
      family and their visits to the Isle of Skye in Scotland between 1910 and 1920, 
      skillfully manipulates temporality and psychological exploration. The novel includes 
      little dialogue and almost no action; most of it is written as thoughts and observations. 
      The novel recalls the power of childhood emotions and highlights the impermanence of 
      adult relationships. Among the book's many tropes and themes are those of loss, 
      subjectivity, and the problem of perception.`,
    rating: 4.2,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0999,
    paperPrice: 0.0120,
    news: false,
    bestsaller: false,
    date: '05-05-1927',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'd9cfab3c-c834-42f7-81c0-aedccbabc02b', 'f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: '59b4f474-92e0-4063-92a4-781695df3e78',
    photo: bookCover28,
    author: 'Joseph Heller',
    title: 'Catch-22',
    description: `Catch-22 is a satirical, historical novel by the American author Joseph Heller, 
      first published in 1961. The novel, set during the later stages of World War II from 1943 onwards, 
      is frequently cited as one of the great literary works of the twentieth century. 
      It has a distinctive non-chronological style where events are described from different characters' 
      points of view and out of sequence so that the time line develops along with the plot.`,
    rating: 5,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1849,
    paperPrice: 0.0937,
    news: false,
    bestsaller: false,
    date: '18-10-1961',
    genre: ['f7f76a58-02b1-48f4-bbbe-dedd1a47b850'],
  },
  {
    bookId: '3696e4ee-dc33-4e1c-b881-4441f7a185e9',
    photo: bookCover29,
    author: 'Joseph Conrad',
    title: 'Heart of Darkness',
    description: `The story details an incident when Marlow, an Englishman, took a 
      foreign assignment from a Belgian trading company as a ferry-boat captain in Africa.
      Although Conrad does not specify the name of the river, at this time Congo Free State, 
      the location of the large and important Congo River, was a private colony of Belgium's 
      King Leopold II. Marlow is employed to transport ivory downriver; however, 
      his more pressing assignment is to return Kurtz, another ivory trader, to civilization 
      in a cover up. Kurtz has a reputation throughout the region.`,
    rating: 2.4,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0799,
    paperPrice: 0.0252,
    news: false,
    bestsaller: false,
    date: '18-04-1899',
    genre: ['f553e028-0e28-4b99-812f-69e8f78cbe8d', '80c5f163-21f3-427b-bfda-89cd6ccd4967'],
  },
  {
    bookId: '9aa429c5-8dbb-4dac-83e4-2ecf368b19ba',
    photo: bookCover30,
    author: 'William Faulkner',
    title: 'The Sound and the Fury',
    description: `The Sound and the Fury is set in the fictional Yoknapatawpha County. 
      The novel centers on the Compson family, former Southern aristocrats who are struggling 
      to deal with the dissolution of their family and its reputation. The novel is separated 
      into four distinct sections.`,
    rating: 3.9,
    ratingCount: 10,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1649,
    paperPrice: 0.0519,
    news: false,
    bestsaller: false,
    date: '18-12-1929',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', 'c2eeb8f6-d914-4450-945a-7703ff9bc614', '1c92e751-0a7c-44c6-a2a3-e0652e3f9108'],
  },
  {
    bookId: '77308e67-eaf3-4f99-8c16-e9e7649dfeea',
    photo: bookCover31,
    author: 'George Orwell',
    title: 'Nineteen Eighty Four',
    description: `The story follows the life of one seemingly insignificant man, Winston Smith, 
      a civil servant assigned the task of perpetuating the regime's propaganda by falsifying 
      records and political literature so that it appears that the government is always correct 
      in what it says. Smith grows disillusioned with his meager existence and so begins a 
      rebellion against the system that leads to his arrest, torture, and conversion.`,
    rating: 4.6,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1507,
    paperPrice: 0.0499,
    news: false,
    bestsaller: false,
    date: '8-06-1949',
    genre: ['442255ad-621b-4ab1-8ff2-a5b9c48b1ecd', 'cd700876-11d0-47f3-a9de-5a1e873e74c5', 'd3e4f1c5-8a59-4410-8d3f-6027ad5cdc7c'],
  },
  {
    bookId: '06c1cea2-20ea-4549-9980-2f7a70fd9013',
    photo: bookCover32,
    author: 'Charles Dickens',
    title: 'Great Expectations',
    description: `Great Expectations is written in the genre of "bildungsroman" 
      or the style of book that follows the story of a man or woman in their quest 
      for maturity, usually starting from childhood and ending in the main character's 
      eventual adulthood. Great Expectations is the story of the orphan Pip, writing 
      his life from his early days of childhood until adulthood and trying to be a 
      gentleman along the way. The story can also be considered semi-autobiographical 
      of Dickens, like much of his work, drawing on his experiences of life and people.`,
    rating: 3.8,
    ratingCount: 10,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1992,
    paperPrice: 0.0995,
    news: false,
    bestsaller: false,
    date: '21-08-1861',
    genre: ['s80c5f163-21f3-427b-bfda-89cd6ccd4967', '1c92e751-0a7c-44c6-a2a3-e0652e3f9108'],
  },
  {
    bookId: 'c184c148-9f88-410e-8f33-334126850613',
    photo: bookCover33,
    author: 'India/Iran/Iraq/Egypt',
    title: 'One Thousand and One Nights',
    description: `One Thousand and One Nights is a collection of Middle Eastern 
      and South Asian stories and folk tales compiled in Arabic during the Islamic 
      Golden Age. It is often known in English as the Arabian Nights, from the first 
      English language edition (1706), which rendered the title as The Arabian Nights' 
      Entertainment. The original concept is most likely derived from an ancient Sassanid 
      Persian prototype that relied partly on Indian elements, but the work as we 
      have it was collected over many centuries by various authors, translators and 
      scholars across the Middle East and North Africa. The tales themselves trace their 
      roots back to ancient and medieval Arabic, Persian, Indian, Egyptian and Mesopotamian 
      folklore and literature. In particular, many tales were originally folk stories 
      from the Caliphate era, while others, especially the frame story, are most probably
      drawn from the Pahlavi Persian work Hazār Afsān. Though the oldest Arabic manuscript 
      dates from the 14th century, scholarship generally dates the collection's genesis to 
      around the 9th century. What is common throughout all the editions of the Nights is 
      the initial frame story of the ruler Shahryar (from Persian: شهريار, meaning "king" 
      or "sovereign") and his wife Scheherazade (from Persian: شهرزاده, meaning "townswoman") 
      and the framing device incorporated throughout the tales themselves. The stories proceed 
      from this original tale; some are framed within other tales, while others begin and end 
      of their own accord. Some editions contain only a few hundred nights, while others include 
      1,001 or more. Some of the best-known stories of The Nights, particularly "Aladdin's 
      Wonderful Lamp", "Ali Baba and the Forty Thieves" and "The Seven Voyages of Sinbad the Sailor", 
      while almost certainly genuine Middle-Eastern folk tales, were not part of The Nights 
      in Arabic versions, but were interpolated into the collection by its early European translators.`,
    rating: 4,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.7490,
    paperPrice: 0.4078,
    news: false,
    bestsaller: false,
    date: '08-09-1835',
    genre: ['f553e028-0e28-4b99-812f-69e8f78cbe8d'],
  },
  {
    bookId: 'a027a6fc-daad-493d-a594-98cac8067931',
    photo: bookCover34,
    author: 'John Steinbeck',
    title: 'The Grapes of Wrath',
    description: `The narrative is non-linear, involving several flashbacks, 
      and two primary narrators: Mr. Lockwood and Ellen "Nelly" Dean. 
      The novel opens in 1801, with Mr. Lockwood arriving at Thrushcross Grange, 
      a grand house on the Yorkshire moors that he is renting from the surly Heathcliff, 
      who lives at nearby Wuthering Heights. Lockwood is treated rudely, and coldly 
      by the brooding, unsociable Heathcliff, and is forced to stay at Wuthering Heights 
      for a night because one of the savage dogs of the Heights attacks him, and the 
      weather turns against him. The housekeeper cautiously takes him to a chamber to 
      sleep through the night and warns him to not speak to Heathcliff about where he is 
      sleeping, for he would get in deep trouble.`,
    rating: 4.6,
    ratingCount: 10,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1799,
    paperPrice: 0.0741,
    news: false,
    bestsaller: false,
    date: '14-04-1939',
    genre: ['80c5f163-21f3-427b-bfda-89cd6ccd4967', '1797c4d8-9c4a-4d63-ba16-6842b61bd95e'],
  },
];

export default testBooks;
