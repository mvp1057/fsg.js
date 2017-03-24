# Github 포크/풀 리퀘스트 워크플로우

## 포크 레포지토리 만들기
- '포크'로 가져올 레포지토리의 페이지에서 `FORK` 버튼을 누른다!
- 자기 깃허브 프로필에 방금 포크한 레포지토리가 생성된다!
- 포크 레포지토리 페이지 상단에 `Clone or download` 버튼을 누르면 git주소를 볼수있다.(복사)

```shell
# 포크 레포지토리 로컬환경으로 클론하기
git clone git@github.com:USERNAME/FORKED-PROJECT.git (복사한 깃주소)
```

## 포크 저장소 최신버전으로 업데이트 받기
꼭 필요한 스텝은 아니지만, 작은 버그 수정보다 더 작업을 해야해서, 오리지널 레포지토리의 업데이트를 꾸준히 받고 싶으면,
오리지널 레포지토리를 `remote`로 추가해야된다!

```shell
# 오리지널 레포지토리를 'upstream' 이란 이름의 리모트 레포지토리로 추가하기
git remote add upstream https://github.com/UPSTREAM-USER/ORIGINAL-PROJECT.git

# 추가된 'upstream' 레포 확인하기
git remote -v
```

포크를 업데이트 받고싶을땐 `fetch`로 업데이트된 내용을 받아온다.
```shell
# 'upstream' 리모트 fetch 하기
git fetch upstream

# 모든 브랜치 확인하기(upstream 에 포함된 브랜치까지) va = View all
git branch -va
```

이제 로컬 master branch로 `checkout` 하고, 'upstream' 리모트의 변경사항들을 머징한다.
```shell
git checkout master
git merge upstream/master
```

## Source
- [Chaser324/GitHub-Forking.md](https://gist.github.com/Chaser324/ce0505fbed06b947d962)