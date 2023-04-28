FROM ruby:3.1.2
RUN mkdir /webapp
WORKDIR /webapp
COPY Gemfile /webapp/
COPY Gemfile.lock /webapp/
RUN gem update --system \
  && gem install bundler -v 2.3.14 \
  && bundle _2.3.14_ install \
  && bundle _2.3.14_ lock --add-platform x86_64-linux
COPY . /webapp
CMD ["bundle", "exec", "rails", "s", "-p", "4400", "-b", "0.0.0.0"]
